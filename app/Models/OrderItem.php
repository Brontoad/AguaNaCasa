<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [
        'quantity',
        'price',

        // Foreign Keys
        'product_id',
        'order_id'
    ];

    public function product() {
        return $this->hasOne(
            Product::class,
            'product_id'
        );
    }

    public function order() {
        return $this->belongsTo(
            Order::class,
            'order_item_id',
            'order_id'
        );
    }
}
