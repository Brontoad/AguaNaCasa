<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Models\Product;
use App\Models\Rider;
use App\Models\Station;
use App\Models\Subscription;
use App\Models\SystemFee;
use App\Models\User;
use App\OrderStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function user() {
        try {
            $default_address = Address::where('addressable_id', Auth::id())->where('is_default', 1)->first();
            $recent_orders = Order::with(['station', 'order_items', 'order_histories'])->where('client_id', Auth::id())->whereNotIn('status', [OrderStatus::COMPLETED->value, OrderStatus::CANCELLED->value])->latest()->take(5)->get();
            $subscriptions = Subscription::where('subscriber_id', Auth::id())->with('station', 'orders')->latest()->take(4)->get();

            return Inertia::render("user/index", [
                "default_address" => $default_address,
                "recent_orders" => $recent_orders,
                "subscriptions" => $subscriptions
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing user dashboard", ["message" => $th->getMessage()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing user dashboard", false)]);
        }
    }

    public function station(Request $request) {
        try {
            $pending_orders = Order::with(['client', 'order_items', 'order_histories'])->where('station_id', Auth::id())->whereNotIn('status', [OrderStatus::COMPLETED->value, OrderStatus::CANCELLED->value])->latest()->take(5)->get();
            $products = [];
            if ($request->station_id) {
                $station_id = $request->station_id;
                $products = Product::whereHas('stations', function ($query) use ($station_id) { $query->where('station_id', $station_id); })
                    ->with(['stations' => function ($query) use ($station_id) { $query->where('station_id', $station_id); }])
                    ->get()->map(function ($product) {
                        $product->is_available = $product->stations[0]->pivot->is_available;
                        $product->price = $product->stations[0]->pivot->price;
                        unset($product->stations);
                        return $product;
                    });
            }
            return Inertia::render("station/index", ["pending_orders" => $pending_orders, 'products' => $products]);
        } catch (\Throwable $th) {
            Log::error("Error in showing station dashboard", [
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing station dashboard", false)
            ]);
        }
    }

    public function fetch_station_products(Request $request)
{
    try {
        $station_id = $request->station_id;

        $products = Product::whereHas('stations', function ($query) use ($station_id) {
                $query->where('station_id', $station_id);
            })
            ->with(['stations' => function ($query) use ($station_id) {
                $query->where('station_id', $station_id);
            }])
            ->get()
            ->map(function ($product) {
                $product->is_available = $product->stations[0]->pivot->is_available;
                $product->price = $product->stations[0]->pivot->price;
                unset($product->stations);
                return $product;
            });

        return response()->json([
            'products' => $products
        ]);

    } catch (\Throwable $th) {
        Log::error("Error in fetching station products", [
            "message" => $th->getMessage(),
            "trace" => $th->getTraceAsString()
        ]);

        return response()->json([
            "message" => "Error fetching station products"
        ], 500);
    }
}

    public function rider() {
        try {
            $pending_orders = Order::with(['client', 'station', 'destination_address', 'order_items', 'order_histories'])->where('rider_id', Auth::id())->whereIn('status', [
                OrderStatus::TO_PICK_UP->value,
                OrderStatus::ON_DELIVERY->value,
            ])->latest()->take(5)->get();

            return Inertia::render("rider/index", ["pending_orders" => $pending_orders]);
        } catch (\Throwable $th) {
            Log::error("Error in showing rider dashboard", [
                "message" => $th->getMessage(),
                "trace" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing rider dashboard", false)
            ]);
        }
    }

    public function admin() {
    try {
        $total_stations = Station::count();
        $total_riders = Rider::count();
        $total_users = User::count();

        // revenue from system fees (paid only)
        $revenue = doubleval(SystemFee::where('paid', true)->sum('amount'));

        // subscriptions count
        $total_subscriptions = Subscription::count();

        $pending_riders = Rider::where('is_approved', false)->get();
        $pending_stations = Station::with(["address"])->get()->where('is_approved', false);

        $pending_stations = $pending_stations->map(function ($station) {
            $latest_paid_fee = $station->system_fees()->where('paid', true)->latest()->first();
            $station->last_paid_at = $latest_paid_fee?->updated_at;
            return $station;
        });

        return Inertia::render("admin/index", [
            "total_stations" => $total_stations,
            "total_riders" => $total_riders,
            "total_users" => $total_users,
            "total_subscriptions" => $total_subscriptions,
            "revenue" => $revenue,
            "pending_riders" => $pending_riders,
            "pending_stations" => $pending_stations
        ]);

    } catch (\Throwable $th) {
        Log::error("Error in showing admin dashboard", [
            "message" => $th->getTraceAsString()
        ]);

        return Inertia::back()->with([
            "toast" => $this->show_toast("Error in showing admin dashboard", false)
        ]);
    }
}
}
