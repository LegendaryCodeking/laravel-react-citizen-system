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
        Schema::create('barangay_users', function (Blueprint $table) {
            $table->id();
            $table->string("barangay_name");
            $table->string("contact_number");
            $table->string("contact_person");
            $table->string("person_contact_number");
            $table->string("email");
            $table->string("logoImage");
            $table->string("barangay");
            $table->string("province");
            $table->string("city");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barangay_users');
    }
};
