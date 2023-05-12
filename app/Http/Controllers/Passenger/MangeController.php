<?php

namespace App\Http\Controllers\Passenger;

use App\Http\Controllers\Controller;
use App\Http\Requests\PassengerRequest;
use App\Http\Resources\Passenger\PassengerResource;
use App\Models\Passenger;
use Illuminate\Http\Request;

class MangeController extends Controller
{
    public function insert(PassengerRequest $request){
        $data = $request->validated();

        $passenger = Passenger::create([
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'email' => $data['email'],
            'contact_number' => $data['contact_number'],
            'middle_initial' => $data['middle_initial'],
            'gender' => $data['gender'],
            'religion' => $data['religion'],
            'citizenship' => $data['citizenship'],
            'age' => $data['age'],
            'birthdate' => $data['birthdate'],
            'status' => $data['status'],
            'type' => $data['type'],
            'address' => $data['address'],
            'qrcode_hash' => bcrypt($data['last_name']),
        ]);

        $id = $passenger->id;

        if($passenger){
            $response = 200;
        }else{
            $response = 500;
        }

        return response(compact('response', 'id'));
    }

    public function show(Passenger $passenger){
        return new PassengerResource($passenger);
    }
}
