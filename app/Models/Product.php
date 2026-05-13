<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasUuids;
    protected $fillable = ['name'];

    public function stations() {
        return $this->belongsToMany(Station::class, 'station_product', 'product_id', 'station_id')
            ->using(StationProduct::class)
            ->withPivot('is_available', 'price');
    }
}
