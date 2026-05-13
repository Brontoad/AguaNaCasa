<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class OrderHistory extends Model
{
    use HasUuids;
    protected $fillable = ['description'];

    public function order() { return $this->belongsTo(Order::class, 'order_history_id', 'order_id'); }
}
