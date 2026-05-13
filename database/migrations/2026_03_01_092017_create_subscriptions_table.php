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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->timeTz('estimated_pickup_time');
            $table->json('pickup_days');
            $table->dateTimeTz('last_paid_at');

            $table->foreignUuid('station_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('subscriber_id')->constrained('users')->cascadeOnDelete();

            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};
