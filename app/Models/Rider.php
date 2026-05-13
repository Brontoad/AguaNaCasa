<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Rider extends Authenticatable
{
    use HasUuids;
    protected $fillable = [
        'plate_number',
        'contact_number',
        'vehicle', 
        'user_id',
        'password', 
        'license_verified_at',
        'last_paid_rider_fee_at',
        'is_suspended',
        'reset_rider_token'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
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

    public function user() { return $this->belongsTo(User::class, 'user_id'); }
    public function station() { return $this->belongsTo(Station::class, 'station_id'); }
    public function orders() { return $this->belongsTo(Order::class, 'rider_id'); }
    public function rider_fees() { return $this->morphMany(SystemFee::class, 'feeable'); }
}
