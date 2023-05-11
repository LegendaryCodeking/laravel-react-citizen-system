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
        Schema::create('passengers', function (Blueprint $table) {
            $table->id();
            $table->string('last_name');
            $table->string('first_name');
            $table->string('middle_initial');
            $table->string('gender');
            $table->string('birthdate');
            $table->string('age');
            $table->string('status');
            $table->string('address');
            $table->string('email')->unique();
            $table->string('cotact_number')->unique();
            $table->string('citizenship');
            $table->string('religion');
            $table->string('type');
            $table->string('verified')->default(0);
            $table->string('qrcode_hash')->nullable();
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('passengers');
    }
};
