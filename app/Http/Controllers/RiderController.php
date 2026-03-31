<?php

namespace App\Http\Controllers;

use App\Models\Rider;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class RiderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $riders = Rider::all();

            return Inertia::render("Admin/Rider", [
                "riders" => $riders
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing all riders", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing all riders", false)
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            return Inertia::render("User", [
                "show_create_rider_form" => true
            ]);
            
        } catch (\Throwable $th) {
            Log::error("Error in showing create rider form", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing create rider form", false)
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            Rider::create([
                'plate_number' => $request->input('plate_number'),
                'vehicle' => $request->input('vehicle'),
                'license' => $request->input('license'),
                'station_id' => $request->input('name'),
                'user_id' => $request->input('name')
            ]);
            
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Rider created successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating rider", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error creating rider", false)
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Rider $rider)
    {
        try {
            return Inertia::render("Admin/Rider", [
                "view_rider_modal" => [
                    "show" => true,
                    "rider" => $rider
                ]
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error showing rider", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing rider", false)
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rider $rider)
    {
        try {
            return Inertia::render("Admin/Rider", [
                "update_rider_form" => [
                    "show" => true,
                    "rider" => $rider
                ]
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing update rider form", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing rider", false)
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rider $rider, string $token)
    {
        DB::beginTransaction();
        try {
            if ($rider->reset_rider_token == $token) {
                $rider->plate_number = $request->input('plate_number');
                $rider->vehicle = $request->input('vehicle');
                $rider->reset_rider_token = null;
                $rider->save();
                DB::commit();
            } else {
                throw new Exception("Reset rider account not found");
            }
            return Inertia::back()->with([
                "toast" => $this->show_toast("Rider edited successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating rider", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error updating rider", false)
            ]);
        }
    }

    public function update_license(Request $request, Rider $rider)
    {
        DB::beginTransaction();
        try {
            $rider->license = $request->input('license');
            $rider->license_verified_at = null;

            $rider->save();
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Rider's license updated successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in updating rider's license", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in updating rider's license", false)
            ]);
        }
    }

    public function update_plate_number(Request $request, Rider $rider, string $token)
    {
        DB::beginTransaction();
        try {
            if ($rider->reset_plate_number_token == $token) {    
                $rider->plate_number = $request->input('plate_number');
                $rider->license_verified_at = null;

                $rider->save();
                DB::commit();
            } else {
                throw new Exception("Reset token for plate number not found", 1);
            }

            return Inertia::back()->with([
                "toast" => $this->show_toast("Rider's plate number updated successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in updating rider's plate number", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in updating rider's plate number", false)
            ]);
        }
    }

    public function suspend(Request $request, Rider $rider)
    {
        DB::beginTransaction();
        try {
            $rider->is_suspended = $request->boolean('is_suspended');
            $rider->save();
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Rider suspended successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in suspending rider", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in suspending rider", false)
            ]);
        }
    }

    public function verify_license(Request $request, string $id)
    {
        DB::beginTransaction();
        try {
            $rider = Rider::findOrFail($id);

            $rider->license_verified_at = Carbon::now();
            $rider->save();
            DB::commit();

            return Inertia::back()->with([
                "toast" => $this->show_toast("License verified successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in verifying license", [
                "user_id" => $id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in verifying license", false)
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rider $rider)
    {
        DB::beginTransaction();
        try {
            $rider->delete();

            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Rider deleted successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in deleting rider", [
                "rider_id" => $rider->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in deleting rider", false)
            ]);
        }
    }
}
