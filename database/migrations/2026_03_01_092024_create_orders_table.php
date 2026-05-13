<?php

use App\OrderStatus;
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
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();
            
            $table->enum('status', OrderStatus::cases());
            $table->double('rating');
            $table->boolean('is_subscription')->default(false);
            $table->double('delivery_fee')->default(0.0);

            $table->foreignUuid('station_id')->constrained()->cascadeOnDelete();
            $table->foreignUuid('client_id')->constrained('users')->cascadeOnDelete();
            $table->foreignUuid('rider_id')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignUuid('destination_address_id')->nullable()->constrained('addresses')->cascadeOnDelete();

            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
