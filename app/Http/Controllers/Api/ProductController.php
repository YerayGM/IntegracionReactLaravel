<?php

namespace App\Http\Controllers\Api;  // ¡Namespace correcto!

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{

    public function index()
    {
        return Product::paginate(12);
    }
}