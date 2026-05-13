<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ["name" => "Mineral Water"],
            ["name" => "Alkaline Water"],
            ["name" => "Purified Water"],
            ["name" => "Distilled Water"]
        ])->each(fn ($product) => Product::create($product));
    }
}
