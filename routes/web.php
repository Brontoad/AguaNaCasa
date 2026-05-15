<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RiderController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\SystemFeeController;
use App\Http\Controllers\UserController;
use App\Models\Order;
use App\Models\Product;
use App\Models\Rider;
use App\Models\SystemFee;
use Illuminate\Support\Facades\Auth;
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

Route::get('/login/{default_active_role_tab?}', function ($default_active_role_tab = null) {
    return Inertia::render('login', ["default_active_role_tab" => $default_active_role_tab]);
})->name('login');

Route::inertia('/login_admin', 'auth/login/admin');

Route::post('/login', [AuthController::class, 'login']);
Route::post('/login/admin', [AuthController::class, 'login_admin']);

Route::inertia('/signup/user', 'auth/signup/user');
Route::inertia('/signup/station', 'auth/signup/station');
Route::inertia('/signup/rider', 'auth/signup/rider');

Route::post('/user', [UserController::class, 'store']);
Route::post('/station', [StationController::class, 'store']);
Route::post('/rider', [RiderController::class, 'store']);

/*
|--------------------------------------------------------------------------
| Shared Auth Actions
|--------------------------------------------------------------------------
*/

Route::get('/logout', [AuthController::class, 'logout']);

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

Route::middleware(['auth:user'])->group(function () {
    Route::post('/subscription', [SubscriptionController::class, 'store'])->name('subscription.create');
    Route::put('/subscription/pay', [SubscriptionController::class, 'pay'])->name('subscription.pay');
});

// Address
Route::post('/address', [AddressController::class, 'store']);

Route::post('/order', [OrderController::class, 'store']);
// Order
Route::middleware(['auth:station,rider'])->prefix('order')->name('order.')->group(function () {
    // Route::post('/', [OrderController::class, 'store']);
    Route::put('/confirm/{id}', [OrderController::class, 'confirm'])->name('confirm');
    Route::put('/pick_up/{id}', [OrderController::class, 'pick_up'])->name('pick_up');
    Route::put('/refill/{id}', [OrderController::class, 'refill'])->name('refill');
    Route::put('/deliver/{id}', [OrderController::class, 'complete'])->name('deliver');
    Route::put('/cancel/{id}', [OrderController::class, 'cancel'])->name('cancel');
});

/*
|--------------------------------------------------------------------------
| STATION ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:station'])->prefix('station')->name('station.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'station'])->name('dashboard');
    Route::get('/order', [OrderController::class, 'index'])->name('order');
    Route::get('/product', [ProductController::class, 'index'])->name('product');
    Route::get('/sale', [SaleController::class, 'index'])->name('sale');
    Route::get('/subscription', [SubscriptionController::class, 'index'])->name('subscription');
    Route::get('/profile', [ProfileController::class, 'station'])->name('profile');

    Route::put('/product/price', [ProductController::class, 'update_price']);
    Route::put('/product/is_available', [ProductController::class, 'update_is_available']);
});

Route::get('/station/products', [DashboardController::class, 'fetch_station_products']);

Route::get('/system_fee', function () {
    $system_fees = SystemFee::where('feeable_id', Auth::guard('station')->id())
        ->latest()
        ->get();

    $latest_system_fee = SystemFee::where('feeable_id', Auth::guard('station')->id())
        ->where('paid', true)
        ->latest()
        ->first();

    return response()->json([
        'system_fees' => $system_fees,
        'latest_system_fee' => $latest_system_fee
    ]);
});

Route::put('/system_fee/pay', [SystemFeeController::class, 'pay']);
/*
|--------------------------------------------------------------------------
| RIDER ROUTES
|--------------------------------------------------------------------------
*/

Route::get('/rider/all', function () { return response()->json(['riders' => Rider::all()]);});

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
    Route::get('/station', [StationController::class, 'index'])->name('station');
    Route::get('/rider', [RiderController::class, 'index'])->name('rider');
    Route::get('/product', [ProductController::class, 'index'])->name('product');
    Route::get('/sale', [SaleController::class, 'index'])->name('sale');
    Route::get('/user', [UserController::class, 'index'])->name('user');
});

Route::middleware(['auth:admin'])->name('admin.')->group(function () {
    Route::put('/station/approve', [StationController::class, 'approve'])->name('station.approve');
    Route::put('/station/suspend', [StationController::class, 'suspend'])->name('station.suspend');

    Route::put('/rider/approve', [RiderController::class, 'approve'])->name('rider.approve');
    Route::put('/rider/suspend', [RiderController::class, 'suspend'])->name('rider.suspend');

    Route::put('/user/suspend', [UserController::class, 'suspend'])->name('user.suspend');

    Route::post('/product', [ProductController::class, 'store'])->name('product.store');
    Route::put('/product', [ProductController::class, 'update'])->name('product.update');

    Route::post('/system_fee', [SystemFeeController::class, 'store'])->name('system_fee.store');
});