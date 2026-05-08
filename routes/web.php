<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Pages
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    if (auth()->guard('user')->check()) {
        return redirect()->route('user.dashboard');
    }

    if (auth()->guard('station')->check()) {
        return redirect()->route('station.dashboard');
    }

    if (auth()->guard('rider')->check()) {
        return redirect()->route('rider.dashboard');
    }

    if (auth()->guard('admin')->check()) {
        return redirect()->route('admin.dashboard');
    }

    return Inertia::render('index');
});

Route::inertia('/about', 'about');
Route::inertia('/contact_us', 'contact-us');

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/

Route::inertia('/login', 'login')->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::inertia('/signup/user', 'auth/signup/user');
Route::inertia('/signup/station', 'auth/signup/station');
Route::inertia('/signup/rider', 'auth/signup/rider');

Route::post('/user', [UserController::class, 'store']);

/*
|--------------------------------------------------------------------------
| Shared Auth Actions
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {
    Route::get('/logout', [AuthController::class, 'logout']);
});

/*
|--------------------------------------------------------------------------
| USER ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:user'])->prefix('user')->name('user.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'user'])->name('dashboard');
    Route::get('/station', [StationController::class, 'index'])->name('station');
    Route::get('/order', [OrderController::class, 'index'])->name('order');
    Route::get('/subscription', [SubscriptionController::class, 'index'])->name('subscription');
    Route::get('/profile', [ProfileController::class, 'user'])->name('profile');
});

/*
|--------------------------------------------------------------------------
| STATION ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:station'])->prefix('station')->name('station.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'station'])->name('dashboard');
    Route::get('/orders', [OrderController::class, 'order'])->name('order');
    Route::get('/products', [ProductController::class, 'product'])->name('product');
    Route::get('/sales', [SaleController::class, 'station'])->name('sale');
    Route::get('/profile', [ProfileController::class, 'station'])->name('profile');
});

/*
|--------------------------------------------------------------------------
| RIDER ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:rider'])->prefix('rider')->name('rider.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'rider'])->name('dashboard');
    Route::get('/orders', [OrderController::class, 'order'])->name('order');
    Route::get('/profile', [ProfileController::class, 'rider'])->name('profile');
});

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'admin'])->name('dashboard');
    Route::get('/stations', [StationController::class, 'index'])->name('station');
});