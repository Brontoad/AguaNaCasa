<?php

namespace App\Models;

use App\OrderStatus;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasUuids;
    protected $fillable = [
        'status', 
        'rating', 
        'station_id', 
        'client_id', 
        'rider_id',
        'destination_address_id',
        'is_subscription',
        'delivery_fee'
    ];

    protected function casts() : array { return ['status' => OrderStatus::class, 'delivery_fee' => 'double']; }

    public function station() { return $this->belongsTo(Station::class, 'station_id'); }
    public function client() { return $this->belongsTo(User::class, 'client_id'); }
    public function rider() { return $this->belongsTo(Rider::class, 'rider_id'); }
    public function destination_address() { return $this->hasOne(Address::class, 'destination_address_id'); }
    public function order_items() { return $this->hasMany(OrderItem::class, 'order_id'); }
    public function order_histories() { return $this->hasMany(OrderHistory::class, 'order_id'); }
}
