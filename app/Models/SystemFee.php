<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class SystemFee extends Model
{
    use HasUuids;
    public $fillable = ['amount', 'due_date', 'paid'];

    public function feeable(): MorphTo { return $this->morphTo(); }
}
