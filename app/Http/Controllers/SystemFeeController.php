<?php

namespace App\Http\Controllers;

use App\Models\Station;
use App\Models\SystemFee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SystemFeeController extends Controller
{
    public function store(Request $request) 
    {
        try {
            DB::beginTransaction();
            $station = Station::findOrFail($request->input('station_id'));
            $station->system_fees()->create([
                "amount" => 150.0,
                "due_date" => now()->addMonth(),
                "paid" => false
            ]);
            DB::commit();
            return Inertia::back()->with(["toast" => $this->show_toast("Product created successfully")]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating product", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error creating product", false)]);
        }
    }

    public function pay(Request $request)
    {
        try {
            DB::beginTransaction();
            $system_fee = SystemFee::findOrFail($request->input('system_fee_id'));
            $system_fee->paid = true;
            $system_fee->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in paying system fee", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error paying system fee", false)]);
        }
    }
}
