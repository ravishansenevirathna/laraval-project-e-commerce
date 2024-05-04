<?php

namespace App\Http\Controllers;

use App\Models\item;
use Illuminate\Http\Request;

class itemcontroller extends Controller
{
    public function additem(){
        return view('additem');
    }

    public function save(Request $request){

        item::create([
            'item_name' => $request ->itemname,
            'item_price' =>  $request ->itemprice,
            'item_listing-date' =>  $request ->itemlistingdate
        ]);

        $notification = [
            "message" => "item has been added"
        ];
        return redirect()->back()->with($notification);

    }
}
