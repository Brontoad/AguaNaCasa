<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            // Admin
            [
                'username' => "ANCadmin",
                'first_name' => "Agua",
                'middle_initial' => "N",
                'last_name' => "Casa",
                'email' => "admin@gmail.com",
                'contact_number' => "09123456781",
                'password' => Hash::make("12345678"), 
                
                'email_verified_at' => now(),
                'contact_number_verified_at' => now(),

                'reset_contact_number_token' => "",
                'reset_email_token' => "",

                'is_suspended' => false,
                'is_admin' => true
            ],
            // WALK IN
            [
                'username' => "WALK-IN",
                'first_name' => "WALK-IN",
                'middle_initial' => "",
                'last_name' => "CUSTOMER",
                'email' => "walkin@gmail.com",
                'contact_number' => "09123456789",
                'password' => Hash::make("12345678"), 
                
                'email_verified_at' => now(),
                'contact_number_verified_at' => now(),

                'reset_contact_number_token' => "",
                'reset_email_token' => "",

                'is_suspended' => false,
                'is_admin' => true
            ],
        ])->each(fn ($product) => User::create($product));
    }
}
