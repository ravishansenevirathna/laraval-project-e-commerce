<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class itemcontroller extends Controller
{
    public function additem(){
        return view('additem');
    }
}
