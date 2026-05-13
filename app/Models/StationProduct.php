<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class StationProduct extends Pivot
{
    protected $casts = [
        'price' => 'float',
        'is_available' => 'boolean'
    ];
}
