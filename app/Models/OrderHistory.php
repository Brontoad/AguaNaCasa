<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderHistory extends Model
{
    protected $fillable = [
        'description',

        'order_id'
    ];

    public function order() {
        return $this->belongsTo(
            Order::class,
            'order_history_id',
            'order_id'
        );
    }
}
