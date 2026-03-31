<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rider extends Model
{
    protected $fillable = [
        'plate_number',
        'vehicle',
        'license',

        'license_verified_at',

        'last_paid_rider_fee_at',

        'is_suspended',

        'reset_rider_token',

        // Foreign Key
        'station_id',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(
            User::class,
            'user_id'
        );
    }
    
    public function station() {
        return $this->belongsTo(
            Station::class,
            'station_id'
        );
    }

    public function orders() {
        return $this->belongsTo(
            Order::class,
            'rider_id'
        );
    }

    public function rider_fees() {
        return $this->hasMany(
            RiderFee::class,
            'rider_id'
        );
    }
}
