<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    
    Route::resource('user', UserController::class);
    Route::resource('station', StationController::class);
    Route::resource('product', ProductController::class);
    Route::resource('order', OrderController::class);
    Route::resource('subscription', SubscriptionController::class);
});

require __DIR__.'/settings.php';
