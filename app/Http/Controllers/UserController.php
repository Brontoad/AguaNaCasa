<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $users = User::all();

            return Inertia::render("Admin/User", [
                "users" => $users
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing all users", [
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing all users", false)
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        try {
            return Inertia::render("Auth/Login/User", [
                "show_create_user_form" => true
            ]);
            
        } catch (\Throwable $th) {
            Log::error("Error in showing create user form", [
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in showing create user form", false)
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
            $user = User::create([
                'username' => $request->input('username'),
                'first_name' => $request->input('first_name'),
                'middle_initial' => $request->input('middle_initial'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'contact_number' => $request->input('contact_number'),
                'password' => Hash::make($request->input('password')),
                'user_type' => $request->input('user_type'),
                'email_verified_at' => Carbon::now(),
                'contact_number_verified_at' => Carbon::now()
            ]);

            $address = $request->input('address');
            
            $user->addresses()->create([
                'label' => 'Home', 'x' => $address['x'], 'y' => $address['y'],
                'location' => $address['location'], 'is_default' => true
            ]);
            
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("User created successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in creating user", [
                "message" => $th->getMessage()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error creating user", false)
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $user = User::findOrFail($id);

            return Inertia::render("Admin/User", [
                "view_user_modal" => [
                    "show" => true,
                    "user" => $user
                ]
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error showing user", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing user", false)
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $user = User::findOrFail($id);

            return Inertia::render("Admin/User", [
                "update_user_form" => [
                    "show" => true,
                    "user" => $user
                ]
            ]);
        } catch (\Throwable $th) {
            Log::error("Error in showing update user form", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error showing user", false)
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
            $user = User::findOrFail($id);

            $user->name = $request->input("name");

            $user->save();
            DB::commit();

            return Inertia::back()->with([
                "toast" => $this->show_toast("User edited successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error updating user", [
                "user_id" => $user->id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error updating user", false)
            ]);
        }
    }

    public function suspend(Request $request, string $id)
    {
        try {
            DB::beginTransaction();
            $user = User::findOrFail($id);

            $user->is_suspended = $request->boolean("is_suspended");

            $user->save();
            DB::commit();

            return Inertia::back()->with(["toast" => $this->show_toast("User suspended successfully")]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in suspending user", ["user_id" => $id, "message" => $th->getMessage(), "trace" => $th->getTraceAsString()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in suspending user", false)]);
        }
    }

    public function verify_contact_number(Request $request, string $id) 
    {
        DB::beginTransaction();
        try {
            $user = User::findOrFail($id);

            $user->contact_number_verified_at = Carbon::now();
            $user->save();
            DB::commit();

            return Inertia::back()->with([
                "toast" => $this->show_toast("Contact number verified successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in verifying contact number", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in verifying contact number", false)
            ]);
        }
    }

    public function verify_email(Request $request, string $id) 
    {
        DB::beginTransaction();
        try {
            $user = User::findOrFail($id);

            $user->email_verified_at = Carbon::now();
            $user->save();
            DB::commit();

            return Inertia::back()->with([
                "toast" => $this->show_toast("Email verified successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in verifying email", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in verifying email", false)
            ]);
        }
    }

    public function update_password(Request $request, string $id, string $token) 
    {
        DB::beginTransaction();
        try {
            $user = User::findOrFail($id);

            if ($user->reset_password_token == $token) {
                $user->password = $request->input("password");
                $user->reset_password_token = null;
                $user->save();
            } else {
                throw new Exception("Token did not matched the current reset token", 1);
            }
            DB::commit();

            return Inertia::back()->with([
                "toast" => $this->show_toast("Password updated successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in updating password", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in updating password", false)
            ]);
        }
    }

    public function update_email(Request $request, string $id, string $token) 
    {
        DB::beginTransaction();
        try {
            $user = User::findOrFail($id);

            if ($user->reset_email_token == $token) {
                $user->email = $request->input("email");
                $user->reset_email_token = null;
                $user->email_verified_at = null;
                $user->save();
            } else {
                throw new Exception("Token did not matched the current reset token", 1);
            }
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Email updated successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in updating email", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in updating email", false)
            ]);
        }
    }

    public function update_contact_number(Request $request, string $id, string $token) 
    {
        DB::beginTransaction();
        try {
            $user = User::findOrFail($id);

            if ($user->reset_contact_number_token == $token) {
                $user->contact_number = $request->input("contact_number");
                $user->reset_contact_number_token = null;
                $user->contact_number_verified_at = null;
                $user->save();
            } else {
                throw new Exception("Token did not matched the current reset token", 1);
            }
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("Contact number updated successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in updating contact number", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in updating contact number", false)
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
            $user = User::findOrFail($id);

            $user->delete();
            DB::commit();
            return Inertia::back()->with([
                "toast" => $this->show_toast("User deleted successfully")
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error("Error in deleting user", [
                "user_id" => $id,
                "message" => $th->getTraceAsString()
            ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in deleting user", false)
            ]);
        }
    }
}
