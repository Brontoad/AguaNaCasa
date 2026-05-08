<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasUuids;
    protected $fillable = ['quantity', 'price'];

    public function product() { return $this->hasOne(Product::class, 'product_id'); }
    public function order() { return $this->belongsTo(Order::class, 'order_item_id', 'order_id'); }
}
