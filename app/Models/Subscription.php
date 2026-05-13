<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasUuids;
    protected $fillable = [
        'estimated_pickup_time',
        'pickup_days',
        'last_paid_at',
        'payment_due_date'
    ];

    public function station() { return $this->hasOne(Station::class, 'station_id'); }
    public function subscriber() { return $this->hasOne(User::class, 'subscriber_id'); }
    public function orders() { return $this->hasMany(Order::class, 'order_id'); }
}
