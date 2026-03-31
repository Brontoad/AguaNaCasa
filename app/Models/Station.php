<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    protected $fillable = [
        'name',
        'email',
        'contact_number',
        'business_license',

        'email_verified_at',
        'contact_number_verified_at',
        'business_license_verified_at',

        'last_paid_system_fee_at',

        'is_suspended',

        'reset_email_token',
        'reset_contact_number_token',

        // Foreign Key
        'owner_id'
    ];

    public function owner() {
        return $this->belongsTo(
            User::class,
            'owner_id'
        );
    }

    public function riders() {
        return $this->hasMany(
            Rider::class,
            'station_id'
        );
    }

    public function orders() {
        return $this->hasMany(
            Order::class,
            'station_id'
        );
    }

    public function subscriptions() {
        return $this->hasMany(
            Subscription::class,
            'subscription_id',
            'station_id'
        );
    }

    public function system_fees() {
        return $this->hasMany(
            SystemFee::class,
            'station_id'
        );
    }

    public function station_address() {
        return $this->hasOne(
            Station::class,
            'station_id'
        );
    }

    public function products() {
        return $this->belongsToMany(
            Product::class,
            'station_product',
            'product_id',
            'station_id'
        )->withPivot(
            'is_available',
            'price'
        );
    }
}
