<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('riders', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('plate_number');
            $table->string('vehicle');
            $table->string('license');

            $table->timestampTz('license_verified_at')->nullable();
            $table->timestampTz('last_paid_rider_fee_at')->nullable();

            $table->boolean('is_suspended')->default(false);

            $table->string('reset_rider_token')->nullable();

            $table->timestampsTz();
            
            $table->foreignUuid('station_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('user_id')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('riders');
    }
};
