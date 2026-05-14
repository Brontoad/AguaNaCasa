<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            if (Auth::guard('user')->check()) { return Inertia::render("user/subscription", ["subscriptions" => Subscription::with(['station', 'orders.station', 'orders.order_items'])->where('subscriber_id', Auth::guard('user')->user()->id)->get()]); } 
            elseif (Auth::guard('station')->check()) { return Inertia::render("station/subscription", ["subscriptions" => Subscription::with(['subscriber', 'destination_address', 'orders.client', 'orders.order_items'])->where('station_id', Auth::guard('station')->user()->id)->get()]); } 
            throw new Exception("Error authenticating user");
        } catch (\Throwable $th) {
            Log::error("Error in showing all subscriptions", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing all subscriptions", false)]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            Subscription::create([
                'estimated_pickup_time' => $request->input('time'),
                'pickup_days' => $request->input('days'),
                'payment_due_date' => now()->addMonth(),
                'last_paid_at' => now(),
                'destination_address_id' => $request->input('address_id'),
                'station_id' => $request->input('station_id'),
                'subscriber_id' => $request->input('user_id')
            ]);

            DB::commit();
            return Inertia::back()->with(["toast" => $this->show_toast("Subscription created successfully")]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating subscription", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error creating order", false)]);
        }
    }

    public function pay(Request $request) 
    {
        try {
            DB::beginTransaction();

            $subscription = Subscription::where('id', $request->input('subscription_id'))->where('subscriber_id', Auth::guard('user')->id())->firstOrFail();
            $subscription->last_paid_at = now();
            $subscription->save();

            DB::commit();
            return Inertia::back()->with(["toast" => $this->show_toast("Subscription paid successfully")]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in paying subscription", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error paying subscription", false)]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Subscription $subscription)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subscription $subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subscription $subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subscription $subscription)
    {
        //
    }
}
