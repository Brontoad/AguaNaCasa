<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $addresses = Address::all();

            return Inertia::render("User", [
                "addresses" => $addresses
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing all addresses", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing all addresses", false)
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
                "show_create_address_form" => true
            ]);
            
        } catch (\Throwable $th) {
            Log::error("Error in showing create address form", [
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing create address form", false)
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
            Address::create($request);
            
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Address created successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating address", [
                "message" => $th->getTrace()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $address = Address::findOrFail($id);

            return Inertia::render("User", [
                "view_address_modal" => [
                    "show" => true,
                    "address" => $address
                ]
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error showing address", [
                "address_id" => $id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing address", false)
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $address = Address::findOrFail($id);

            return Inertia::render("User", [
                "update_address_form" => [
                    "show" => true,
                    "address" => $address
                ]
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing update address form", [
                "address_id" => $id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing address", false)
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        DB::beginTransaction();
        try {
            $address = Address::findOrFail($id);

            $address->x = $request->input('x');
            $address->y = $request->input('y');
            $address->suburb = $request->input('suburb');
            $address->postal_code = $request->input('postal_code');
            $address->county = $request->input('county');
            $address->city = $request->input('city');
            $address->country = $request->input('country');

            $address->save();

            DB::commit();
            return Inertia::back()->with([
                "toast" => "Address edited successfully"
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating address", [
                "address_id" => $address->id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error updating address", false)
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DB::beginTransaction();
        try {
            $address = Address::findOrFail($id);
            $address->delete();

            DB::commit();
            
            return Inertia::back()->with([
                "toast" => "Address deleted successfully"
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error deleting address", [
                "address_id" => $id,
                "message" => $th->getTrace()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error deleting address", false)
            ]);
        }
    }
}
