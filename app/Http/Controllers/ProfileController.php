<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function user() {
        try {
            return Inertia::render("user/profile", []);
        } catch (\Throwable $th) {
            Log::error("Error in showing user profile", ["message" => $th->getTrace()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing user profile", false)]);
        }
    }

    public function station() {
        try {
            return Inertia::render("Station/Profile", []);
        } catch (\Throwable $th) {
            Log::error("Error in showing station profile", ["message" => $th->getTrace()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing station profile", false)]);
        }
    }

    public function rider() {
        try {
            return Inertia::render("Rider/Profile", []);
        } catch (\Throwable $th) {
            Log::error("Error in showing rider profile", ["message" => $th->getTrace()]);
            return Inertia::back()->with(["toast" => $this->show_toast("Error in showing rider profile", false)]);
        }
    }
}
