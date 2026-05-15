<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\OrderStatus;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index(Request $request)
    {
        try {
            if ($request->user('station')) {
                $startOfWeek = Carbon::now()->startOfWeek();
                $endOfWeek = Carbon::now()->endOfWeek();

                // 1. DAILY SALES (THIS WEEK)
                $dailySalesRaw = Order::where('status', \App\OrderStatus::COMPLETED)
                    ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
                    ->select(
                        DB::raw('DATE(created_at) as date'),
                        DB::raw('SUM(delivery_fee) as total')
                    )
                    ->groupBy('date')
                    ->orderBy('date')
                    ->get();

                // Fill missing days (Mon–Sun safe output)
                $labels = [];
                $values = [];

                for ($i = 0; $i < 7; $i++) {
                    $date = Carbon::now()->startOfWeek()->addDays($i);
                    $labels[] = $date->format('D'); // Mon, Tue, etc.

                    $match = $dailySalesRaw->first(function ($item) use ($date) {
                        return Carbon::parse($item->date)->isSameDay($date);
                    });

                    $values[] = $match ? (float) $match->total : 0;
                }

                $sales = [
                    'labels' => $labels,
                    'values' => $values
                ];

                // 2. PRODUCT BREAKDOWN
                $productBreakdownRaw = DB::table('order_items')
                    ->join('orders', 'orders.id', '=', 'order_items.order_id')
                    ->where('orders.status', \App\OrderStatus::COMPLETED)
                    ->select(
                        'order_items.product_name',
                        DB::raw('SUM(order_items.quantity) as total_sold')
                    )
                    ->groupBy('order_items.product_name')
                    ->orderByDesc('total_sold')
                    ->get();

                $product_breakdown = [
                    'labels' => $productBreakdownRaw->pluck('product_name'),
                    'values' => $productBreakdownRaw->pluck('total_sold')
                ];

                return Inertia::render('station/sale', [
                    'total_orders' => Order::where('status', \App\OrderStatus::COMPLETED)->count(),
                    'revenue' => Order::where('status', \App\OrderStatus::COMPLETED)->sum('delivery_fee'),
                    'sales' => $sales,
                    'product_breakdown' => $product_breakdown
                ]);
            } elseif ($request->user('admin')) {
                $currentYear = Carbon::now()->year;

                // MONTHLY SYSTEM FEE SALES
                $monthlySalesRaw = DB::table('system_fees')
    ->where('paid', true)
    ->whereYear('updated_at', $currentYear)
    ->select(
        DB::raw('EXTRACT(MONTH FROM updated_at)::int as month'),
        DB::raw('SUM(amount) as total')
    )
    ->groupBy('month')
    ->orderBy('month')
    ->get();

                $labels = [];
                $values = [];

                for ($month = 1; $month <= 12; $month++) {
                    $labels[] = Carbon::create()->month($month)->format('M');
                    $match = $monthlySalesRaw->firstWhere('month', $month);
                    $values[] = $match ? (float) $match->total : 0;
                }

                $sales = [
                    'labels' => $labels,
                    'values' => $values
                ];

                return Inertia::render('admin/sale', [
                    'total_orders' => Order::where('status', OrderStatus::COMPLETED)->count(),

                    'total_subscriptions' => DB::table('subscriptions')->count(),

                    'revenue' => DB::table('system_fees')
                        ->where('paid', true)
                        ->sum('amount'),

                    'sales' => $sales
                ]);
            } else { throw new Exception("Error authenticating user", 1); }
        } catch (\Throwable $th) {
            Log::error("Error in showing sales", ["message" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing all sales", false)]);
        }
    }
}
