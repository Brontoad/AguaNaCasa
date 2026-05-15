<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Station;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $products = Product::all();

            if (Auth::guard('station')->check()) { 
                $station_id = Auth::guard('station')->id();
                $products = Product::all()->map(function ($product) use ($station_id) {

                    $station = $product->stations()->where('station_id', $station_id)->first();

                    $pivot = $station?->pivot;

                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'price' => $pivot?->price,
                        'is_available' => $pivot?->is_available,
                        'has_station' => $pivot ? true : false,
                    ];
                });
                return Inertia::render("station/product", ["products" => $products]);
            } elseif (Auth::guard('admin')->check()) { return Inertia::render("admin/product", ["products" => $products]);
            } throw new Exception("Error authenticating user");
        } catch (\Throwable $th) {
            Log::error("Error in showing all products", [
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing all products", false)
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            return Inertia::render("Admin/Product", [
                "show_create_product_form" => true
            ]);
            
        } catch (\Throwable $th) {
            Log::error("Error in showing create product form", [
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing create product form", false)
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            Product::create($request);
            DB::commit();
            return Inertia::back()->with(["toast" => $this->show_toast("Product created successfully")]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating product", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error creating product", false)]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        try {
            return Inertia::render("Admin/Product", [
                "view_product_modal" => [
                    "show" => true,
                    "product" => $product
                ]
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error showing product", [
                "product_id" => $product->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing product", false)
            ]);
        } 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        try {
            return Inertia::render("Admin/Product", [
                "update_product_form" => [
                    "show" => true,
                    "product" => $product
                ]
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing update product form", [
                "product_id" => $product->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing update product form", false)
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        try {
            DB::beginTransaction();
            $product->name = $request->input('name');
            DB::commit();
            return Inertia::back()->with(["toast" => "Product edited successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating product", ["product_id" => $product->id, "message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error updating product", false)]);
        }
    }

    public function update_price(Request $request)
    {
        try {
            DB::beginTransaction();

            $station = Station::findOrFail($request->station_id);
            $station->products()->syncWithoutDetaching([$request->product_id => ['price' => doubleval($request->input("price"))]]);

            DB::commit();
            return Inertia::back()->with(["toast" => "Product price updated successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating product price", ["message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error updating product price", false)]);
        }
    }

    public function update_is_available(Request $request)
    {
        try {
            DB::beginTransaction();

            $station = Station::findOrFail($request->station_id);
            $station->products()->syncWithoutDetaching([
                $request->product_id => ['is_available' => $request->boolean("is_available")]
            ]);

            DB::commit();
            return Inertia::back()->with(["toast" => "Product price updated successfully"]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating product price", ["message" => $th->getMessage()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error updating product price", false)]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        DB::beginTransaction();
        try {
            $product->delete();

            DB::commit();
            
            return Inertia::back()->with([
                "toast" => "Product deleted successfully"
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error deleting product", [
                "product_id" => $product->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error deleting product", false)
            ]);
        }
    }
}
