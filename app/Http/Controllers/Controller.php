<?php

namespace App\Http\Controllers;

abstract class Controller
{
    protected function show_toast(string $message, bool $success = true) {
        return [
            "success" => $success,
            "message" => $message
        ];
    }
}
