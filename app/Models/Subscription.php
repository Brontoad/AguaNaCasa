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
        'payment_due_date',
        'station_id',
        'subscriber_id',
        'destination_address_id'
    ];
    protected $casts = [
    'pickup_days' => 'array',
];

    public function station() { return $this->belongsTo(Station::class, 'station_id'); }
    public function subscriber() { return $this->belongsTo(User::class, 'subscriber_id'); }
    public function destination_address() { return $this->belongsTo(Address::class, 'destination_address_id'); }
    public function orders() { return $this->hasMany(Order::class, 'subscription_id'); }
}
