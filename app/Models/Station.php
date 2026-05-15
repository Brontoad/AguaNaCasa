<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Station extends Authenticatable
{
    use HasUuids;
    protected $fillable = [
        'name',
        'email',
        'password',
        'contact_number',
        'email_verified_at',
        'contact_number_verified_at',
        'business_license_verified_at',
        'last_paid_system_fee_at',
        'is_suspended',
        'reset_email_token',
        'reset_contact_number_token',
        'is_approved',
        'owner_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'subscriptions',
        'orders'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function owner() { return $this->belongsTo(User::class, 'owner_id'); }
    public function riders() { return $this->hasMany(Rider::class, 'station_id'); }
    public function orders() { return $this->hasMany(Order::class, 'station_id'); }
    public function subscriptions() { return $this->hasMany(Subscription::class, 'subscription_id', 'station_id'); }
    public function system_fees() { return $this->morphMany(SystemFee::class, 'feeable'); }
    public function address() { return $this->morphOne(Address::class, 'addressable'); }

    public function products() {
        return $this->belongsToMany(Product::class, 'station_product', 'station_id', 'product_id')
            ->using(StationProduct::class)
            ->withPivot('is_available', 'price');
    }
}
