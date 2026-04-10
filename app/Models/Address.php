<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'label',
        'x',
        'y',
        'suburb',
        'postal_code',
        'county',
        'city',
        'country',

        // Foreign Keys
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(
            User::class,
            'user_id'
        );
    }
}
