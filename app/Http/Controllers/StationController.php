<?php

namespace App\Http\Controllers;

use App\Models\Station;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            if ($request->user('user')) { return Inertia::render("user/station", ["stations" => Station::all()]); } 
            elseif ($request->user('admin')) { return Inertia::render("admin/station", ["stations" => Station::all()]); } 
            else { throw new Exception("Error authenticating user", 1); }
        } catch (\Throwable $th) {
            Log::error("Error in showing all stations", ["message" => $th->getTrace()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing all stations", false)]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $station = Station::create($request);

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Station $station)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Station $station)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Station $station)
    {
        DB::beginTransaction();
        try {
            $station->name = $request->input('name');
            $station->location_x = $request->input('location_x');
            $station->location_y = $request->input('location_y');
            $station->contact_number = $request->input('contact_number');
            $station->email = $request->input('email');
            $station->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }

    public function suspend(Request $request, string $id)
    {
        DB::beginTransaction();
        try {
            $station = Station::findOrFail($id);

            $station->is_suspended = $request->boolean("is_suspended");
            $station->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }

    public function verify_email(Request $request, string $id)
    {
        DB::beginTransaction();
        try {
            $station = Station::findOrFail($id);

            $station->email_verified_at = Carbon::now();
            $station->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }

    public function verify_contact_number(Request $request, string $id)
    {
        DB::beginTransaction();
        try {
            $station = Station::findOrFail($id);

            $station->contact_number_verified_at = Carbon::now();
            $station->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }


    public function verify_business_license(Request $request, string $id)
    {
        DB::beginTransaction();
        try {
            $station = Station::findOrFail($id);

            $station->is_business_license_verified = $request->boolean("is_business_license_verified");
            $station->business_license_verified_at = Carbon::now();
            $station->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Station $station)
    {
        DB::beginTransaction();
        try {
            $station->delete();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            //throw $th;
        }
    }
}
