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
        Schema::create('system_fees', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->double('amount');

            $table->dateTimeTz('due_date');
            
            $table->boolean('paid')->default(false);

            $table->timestampsTz();
            $table->uuidMorphs('feeable');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('system_fees');
    }
};
