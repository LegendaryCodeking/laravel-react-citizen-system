<?php

namespace App\Http\Controllers\Passenger;

use App\Http\Controllers\Controller;
use App\Http\Requests\PassengerRequest;
use App\Http\Resources\Passenger\PassengerNoMediaRerource;
use App\Http\Resources\Passenger\PassengerResource;
use App\Models\Media;
use App\Models\Passenger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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
            'qrcode_hash' => rand(100, 1000000),
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
    
    public function get_passengers(Passenger $passenger){

        $get_media = Media::all();

        if(count($get_media) >= 0){
            return PassengerResource::collection(
                $passenger::where('verified', 0)
                            ->orderBy('id', 'DESC')
                            ->get()
            );
        }else{
           return response(null);
        }

    }

    public function get_passengers_approved(Passenger $passenger){

        return PassengerResource::collection(
            $passenger::where('verified', '!=', 0)
                        ->orderBy('id', 'DESC')
                        ->get()
        );
    }

    public function profile(Passenger $passenger, Request $request){

        if(isset($request->qr)){
            $data =  Passenger::where('qrcode_hash', $request->qr)->first();
            return json_encode($data);
            
        }elseif(isset($request->id)){

            $id = $request->id;
            $get_profile = Media::where('passengers_id', $id)->first();
    
            if($get_profile != null){
                return PassengerResource::collection(
                    $passenger::join('media', 'media.passengers_id', '=', 'passengers.id')
                    ->where('id', $request->id)
                    ->first()
                );
            }else{
                $data =  Passenger::where('id', $request->id)->first();
               return json_encode($data);
            }

        }
        
    }

    public function approve(Request $request){
        $id  = $request->id;
        $password = '';
        $link = '';
        
        if($id){
            $passenger = Passenger::where('id', $request->id)->first();

            if(!$passenger->verified){
                $passenger->verified = date('m-d-Y');
                
                if(!$passenger->password){
                    $try_pass = str_replace(' ', '_', $passenger->last_name);
                    $password = $try_pass.'_'.$passenger->age;
                    $passenger->password = bcrypt($password);
                }else{
                    $password = $request->password;
                    $passenger->password = bcrypt($password);
                }

                $link = 'http://localhost:5173/qr_code/'.$passenger->qrcode_hash;

                $email_data = [
                    'recipient' => $passenger->email,
                    'fromEmail' => "8rja_express@gmail.com",
                    'fromName' => '8RJA EXPRESS INC.',
                    'subject' => ' Thank You for Registering! Your User Account and QR Code Download Link',
                    'password' => $password,
                    'email' => $passenger->email,
                    'name' => $passenger->last_name.' '.$passenger->first_name,
                    'link' => $link,
                ];

                $sent = Mail::send('mail.index', $email_data, function($message) use ($email_data){
                    $message->to($email_data['recipient'])
                            ->from($email_data['fromEmail'], $email_data['fromName'])
                            ->subject($email_data['subject']);
                });

                if($sent){
                    $passenger->save();

                    return response([
                        'message' => 'success'
                    ], 200);
                }else{
                    return response([
                        'message-error' => 'error'
                    ], 422);
                }
                
            }
        }else{
            return response([
                'message-error' => 'error'
            ], 422);
        }
    }
}
