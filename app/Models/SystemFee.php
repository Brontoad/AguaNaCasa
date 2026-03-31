<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemFee extends Model
{
    public $fillable = [
        'amount',
        'due_date', 
        'paid',

        // Foreign Keys
        'station_id'
    ];

    public function station() {
        return $this->belongsTO(
            Station::class,
            'station_id'
        );
    }
}
