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
        Schema::create('seniors', function (Blueprint $table) {
            $table->id();
            $table->string('last_name');
            $table->string('first_name');
            $table->string('gender');
            $table->string('birthdate');
            $table->string('age');
            $table->string('status');
            $table->string('province');
            $table->string('city');
            $table->string('barangay');
            $table->string('birthplace');
            $table->string('with_pension');
            $table->string('monthly_pension');
            $table->string('emergency_contact_person');
            $table->string('emergency_contact_number');
            $table->string('front_id');
            $table->string('back_id');
            $table->integer('email')->unique();
            $table->string('cotact_number')->unique();
            $table->string('verified')->default(0);
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
        Schema::dropIfExists('seniors');
    }
};
