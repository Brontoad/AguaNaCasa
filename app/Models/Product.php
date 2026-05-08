<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasUuids;
    protected $fillable = ['name'];

    public function stations() {
        return $this->belongsToMany(Station::class, 'station_product', 'station_id', 'product_id')
            ->withPivot('is_available');
    }
}
