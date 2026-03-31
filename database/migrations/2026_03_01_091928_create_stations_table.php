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
        Schema::create('stations', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('contact_number')->unique();
            $table->string('business_license')->unique();

            $table->timestampTz('email_verified_at')->nullable();
            $table->timestampTz('contact_number_verified_at')->nullable();
            $table->timestampTz('business_license_verified_at')->nullable();

            $table->timestampTz('last_paid_system_fee_at')->nullable();

            $table->boolean('is_suspended')->default(false);

            $table->string('reset_email_token')->nullable();
            $table->string('reset_contact_number_token')->nullable();


            $table->foreignUuid('owner_id')->constrained('users')->cascadeOnDelete();

            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};
