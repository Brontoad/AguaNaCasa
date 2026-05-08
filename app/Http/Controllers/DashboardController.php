<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function user() {
        try {
            $user = Auth::user();
            $default_address = Address::where('addressable_id', Auth::id())
    ->where('is_default', 1)
    ->first();

$recent_orders = Order::where('client_id', Auth::id())
    ->latest()
    ->take(5)
    ->get();

$subscriptions = Subscription::where('subscriber_id', Auth::id())
    ->latest()
    ->take(4)
    ->get();

            return Inertia::render("user/index", [
                "default_address" => $default_address,
                "recent_orders" => $recent_orders,
                "subscriptions" => $subscriptions
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing user dashboard", [
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing user dashboard", false)
            ]);
        }
    }

    public function station() {
        try {
            $pending_orders = [];

            return Inertia::render("Station/Index", ["pending_orders" => $pending_orders]);
        } catch (\Throwable $th) {
            Log::error("Error in showing station dashboard", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing station dashboard", false)
            ]);
        }
    }

    public function rider() {
        try {
            $pending_orders = [];

            return Inertia::render("Rider/Index", [
                "pending_orders" => $pending_orders
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing rider dashboard", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing rider dashboard", false)
            ]);
        }
    }

    public function admin() {
        try {
            $total_stations = 0;
            $total_orders = 0;
            $total_users = 0;
            $total_earnings = 0;

            return Inertia::render("Admin/Index", [
                "total_stations" => $total_stations,
                "total_orders" => $total_orders,
                "total_users" => $total_users,
                "total_earnings" => $total_earnings
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing admin dashboard", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing admin dashboard", false)
            ]);
        }
    }
}
