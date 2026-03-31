<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StationAddress extends Model
{
    protected $fillable = [
        'x',
        'y',
        'suburb',
        'postal_code',
        'county',
        'city',
        'country',

        // Foreign Keys
        'station_id'
    ];

    public function station() {
        return $this->belongsTo(
            Station::class,
            'station_id'
        );
    }
}
