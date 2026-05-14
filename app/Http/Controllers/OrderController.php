<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Rider;
use App\Models\Subscription;
use App\Models\User;
use App\OrderStatus;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            if (Auth::guard('user')->check()) { 
                $user = Auth::guard('user')->user();
                $orders = Order::with(['station', 'order_items', 'order_histories'])->where('client_id', $user->id)->get();
                return Inertia::render("user/order", ["orders" => $orders]);
            } elseif (Auth::guard('station')->check()) { 
                $station = Auth::guard('station')->user();
                $riders = Rider::all();
                $orders = Order::with(['client', 'order_items', 'order_histories'])->where('station_id', $station->id)->get();
                return Inertia::render("station/order", ["orders" => $orders, "riders" => $riders]);
            } elseif (Auth::guard('rider')->check()) { 
                $rider = Auth::guard('rder')->user();
                $orders = Order::with(['rider', 'order_items', 'order_histories'])->where('rider_id', $rider->id)->get();
                return Inertia::render("rider/order", ["orders" => $orders]); 
            } throw new Exception("Error authenticating user");
        } catch (\Throwable $th) {
            Log::error("Error in showing all orders", ["message" => $th->getMessage()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing all orders", false)]);
        }
    }

    /**
     * Store a newly created resource in storage.
     * 
     * Request:
     * status: string
     * station_id: uuid
     * client_id: uuid
     * destination_address_id: uuid
     * 
     * order_items: OrderItem[]
     * order_item.quantity: integer
     * order_item.price: double
     * order_item.product_id: uuid
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $is_walk_in = $request->boolean('is_walk_in');
            $is_subscription = $request->boolean('is_subscription');

            $client_id = $is_walk_in ? User::where('username', 'WALK-IN')->get()->first()->id : $request->input('client_id');
            $order = Order::create([
                'rating' => 0.0,
                'status' => $is_walk_in || $is_subscription ? OrderStatus::REFILLING : OrderStatus::WAITING_FOR_CONFIRMATION,
                'is_subscription' => $is_subscription,
                'delivery_fee' => $request->input('delivery_fee'),
                'client_id' => $client_id,
                'station_id' => $request->input('station_id'),
                'destination_address_id' => $request->input('destination_address_id') ?? null,
                'rider_id' => $request->input('rider_id') ?? null,
                'subscription_id' => $is_subscription ? $request->input('subscription_id') : null
            ]);

            if ($is_subscription) { 
                $order->update(['subscription_id' => $request->input('subscription_id')]);
                $order->save();
            }

            foreach ($request->array('order_items') as $order_item) {        
                $order->order_items()->create([
                    'quantity' => $order_item['quantity'],
                    'price' => $order_item['price'],
                    'product_id' => $order_item['product_id'],
                    'product_name' => $order_item['product_name']
                ]);
            }

            if ($is_walk_in) { $order->order_histories()->create(['description' => 'Placed walk-in order.']); } 
            else if ($is_subscription) { $order->order_histories()->create(['description' => 'Placed order from subscription.']); } 
            else { $order->order_histories()->create(['description' => 'Placed order, and waiting for confirmation by the station.']); }

            DB::commit();
            return Inertia::back()->with(["toast" => $this->show_toast("Order created successfully")]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating order", ["message" => $th->getMessage()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error creating order", false)]);
        }
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        DB::beginTransaction();
        try {
            $order->status = $request->input('status');
            $order->destination_address_id = $request->input('destination_address_id');
            $order->station_id = $request->input('station_id');
            $order->client_id = $request->input('client_id');
            $order->rider_id = $request->input('rider_id');

            $order->save();

            DB::commit();
            return Inertia::back()->with([
                "toast" => "Order edited successfully"
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating order", [
                "order_id" => $order->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error updating order", false)
            ]);
        }
    }

    /**
     * Request:
     * rider_id: uuid
     */
    public function confirm(Request $request, string $id)
    {
        try {
            DB::beginTransaction();
            $order = Order::findOrFail($id);
            $order->status = OrderStatus::TO_PICK_UP;

            // Assign rider for pick up
            $order->rider_id = $request->input('rider_id');
            $order->save();

            $order->order_histories()->create(['description' => 'Order confirmed by station. Waiting for rider to pick-up order.']);

            DB::commit();
            return Inertia::back()->with(["toast" => "Order confirmed for pick-up successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error confirming order for pick-up", [
                "order_id" => $order->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error confirming order for pick-up", false)]);
        }
    }

    public function pick_up(Request $request, string $id)
    {
        try {
            DB::beginTransaction();
            $order = Order::findOrFail($id);
            $order->status = OrderStatus::REFILLING;
            $order->save();

            $order->order_histories()->create(['description' => 'Order picked up by the station. Currently refilling order.']);

            DB::commit();
            return Inertia::back()->with([
                "toast" => "Order picked up successfully"
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error picking up order", [
                "order_id" => $order->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error picking up order", false)
            ]);
        }
    }

    public function refill(Request $request, string $id)
    {
        try {
            DB::beginTransaction(); 
            $order = Order::findOrFail($id);
            $order->status = OrderStatus::ON_DELIVERY;
            $order->save();

            $order->order_histories()->create(['description' => 'Order finished refilling by the station. Order under delivery.']);

            DB::commit();
            return Inertia::back()->with(["toast" => "Order refilled successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error refilling order", ["order_id" => $order->id, "message" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error refilling order", false)]);
        }
    }

    public function complete(Request $request, string $id)
    {
        try {
            DB::beginTransaction();
            $order = Order::findOrFail($id);
            $order->status = OrderStatus::COMPLETED;
            $order->save();

            $order->order_histories()->create([
                'description' => 'Order completed.'
            ]);

            DB::commit();
            return Inertia::back()->with([
                "toast" => "Order completed successfully"
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error completing order", [
                "order_id" => $order->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error completing order", false)
            ]);
        }
    }

    public function cancel(Request $request, string $id)
    {
        try {
            DB::beginTransaction();
            $order = Order::findOrFail($id);
            $order->status = OrderStatus::CANCELLED;
            $order->save();

            $order->order_histories()->create(['description' => 'Order cancelled. Reason: '.$request->input('reason')]);

            DB::commit();
            return Inertia::back()->with(["toast" => "Order cancelled successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error cancelling order", [
                "order_id" => $order->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error cancelling order", false)
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        try {
            DB::beginTransaction();
            $order->delete();

            DB::commit();
            
            return Inertia::back()->with(["toast" => "Order deleted successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error deleting order", [
                "order_id" => $order->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error deleting order", false)
            ]);
        }
    }
}
