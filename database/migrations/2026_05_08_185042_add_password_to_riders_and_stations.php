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
        Schema::table('stations', function (Blueprint $table) {
            $table->string('password')->after('contact_number');
            $table->rememberToken();
        });

        Schema::table('riders', function (Blueprint $table) {
            $table->string('password')->after('contact_number');
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('riders_and_stations', function (Blueprint $table) {
            //
        });
    }
};
