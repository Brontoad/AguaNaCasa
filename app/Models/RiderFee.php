<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RiderFee extends Model
{
    protected $fillable = [
        'amount',
        'due_date', 
        'paid',

        // Foreign Keys
        'rider_id'
    ];

    public function rider() {
        return $this->belongsTo(
            Rider::class,
            'rider_id'
        );
    }
}
