<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasUuids;
    protected $fillable = [
        'name',
        'email',
        'contact_number',
        'email_verified_at',
        'contact_number_verified_at',
        'business_license_verified_at',
        'last_paid_system_fee_at',
        'is_suspended',
        'reset_email_token',
        'reset_contact_number_token'
    ];

    public function owner() { return $this->belongsTo(User::class, 'owner_id'); }
    public function riders() { return $this->hasMany(Rider::class, 'station_id'); }
    public function orders() { return $this->hasMany(Order::class, 'station_id'); }
    public function subscriptions() { return $this->hasMany(Subscription::class, 'subscription_id', 'station_id'); }
    public function system_fees() { return $this->morphMany(SystemFee::class, 'feeable'); }
    public function address() { return $this->morphOne(Address::class, 'addressable'); }

    public function products() {
        return $this->belongsToMany(Product::class, 'station_product', 'product_id', 'station_id' )
            ->withPivot('is_available', 'price');
    }
}
