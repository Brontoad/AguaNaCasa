<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Station;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class StationController extends Controller
{
    public static function distance(float $lat1, float $lon1, float $lat2, float $lon2): float {
        $earthRadius = 6371;

        $latDelta = deg2rad($lat2 - $lat1);
        $lonDelta = deg2rad($lon2 - $lon1);

        $a = sin($latDelta/2) * sin($latDelta/2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($lonDelta/2) * sin($lonDelta/2);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));

        return $earthRadius * $c;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $stations = Station::all();
            if ($request->user('user')) { 
                /** @var User $user */
                $user = Auth::user();

                $stations = Station::with('address')->get();
                $user_lat = $user->default_address()->y;
                $user_lng = $user->default_address()->x;

                $stations = $stations->map(function ($station) use ($user_lat, $user_lng) {
                    $station->distance = StationController::distance($user_lat, $user_lng, $station->address->y, $station->address->x);
                    return $station;
                });

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

                return Inertia::render("user/station", ["stations" => $stations, "products" => $products]);
            } 
            elseif ($request->user('admin')) { return Inertia::render("admin/station", ["stations" => $stations]); } 
            else { throw new Exception("Error authenticating user", 1); }
        } catch (\Throwable $th) {
            Log::error("Error in showing all stations", ["message" => $th->getTraceAsString()]);
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
            $station = Station::create([
                'name' => $request->input("name"),
                'email' => $request->input("email"),
                'password' => Hash::make($request->input("password")),
                'owner_id' => $request->input('owner_id'),
                'contact_number' => $request->input("contact_number"),
                'email_verified_at' => now(),
                'contact_number_verified_at' => now(),
                'business_license_verified_at' => now(),
                'last_paid_system_fee_at' => now(),
                'is_suspended' => false,
                'reset_email_token' => "",
                'reset_contact_number_token' => ""
            ]);

            $station->address()->create($request->input('address'));
            $station->save();

            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Staton created successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating station", [
                "message" => $th->getMessage()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error creating station", false)
            ]);
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
