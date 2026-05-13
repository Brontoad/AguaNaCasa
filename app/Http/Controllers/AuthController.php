<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(Request $request) {
        /**
         * email, contact number
         * password
         */
        
        $use_email = $request->boolean('use_email');
        $role = $request->input('role');
        $request->validate([
            'email' => $use_email ? 'required|email': 'nullable',
            'contact_number' => $use_email ? 'nullable': 'required|string',
            'password' => 'required|string'
        ]);

        $credentials = $use_email ? $request->only('email', 'password') : $request->only('contact_number', 'password');
        $remember = $request->boolean('remember');

        try {
    if (Auth::guard($role)->attempt($credentials, $remember)) {
        $request->session()->regenerate();

        return redirect()->route($role . '.dashboard');
    }

    return Inertia::back()->with([
        "toast" => $this->show_toast("Invalid credentials", false)
    ]);

} catch (\Throwable $th) {
    Log::error("Login error", [
        "message" => $th->getMessage(),
        "trace" => $th->getTraceAsString()
    ]);

    return Inertia::back()->with([
        "toast" => $this->show_toast("Error in logging in", false)
    ]);
}
    }

    public function login_admin(Request $request) {
        /**
         * email, contact number
         * password
         */
        $request->validate(['email' => 'required|email', 'password' => 'required|string']);

        $credentials = $request->only('email', 'password');
        if (Auth::guard('admin')->attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended("admin/dashboard");
        } else {
            // Log::error("Error in creating order", [
            //     "message" => $th->getMessage()
            // ]);
            return Inertia::back()->with([
                "toast" => $this->show_toast("Error in logging in", false)
            ]);
        }
    }

    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        
        return redirect('/');
    }
}
