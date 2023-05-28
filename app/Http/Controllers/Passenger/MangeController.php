<?php

namespace App\Http\Controllers\Passenger;

use App\Http\Controllers\Controller;
use App\Http\Requests\PassengerRequest;
use App\Http\Requests\SeniorCitizen\BarangayRequest;
use App\Http\Requests\SeniorCitizen\SeniorRequest;
use App\Http\Resources\Passenger\PassengerNoMediaRerource;
use App\Http\Resources\Passenger\PassengerResource;
use App\Http\Resources\SeniorCitizen\BarangayResource;
use App\Http\Resources\SeniorCitizen\SeniorResrource;
use App\Models\ManifestAction;
use App\Models\ManifestDate;
use App\Models\Media;
use App\Models\Passenger;
use App\Models\SeniorCitize\BarangayUser;
use App\Models\SeniorCitize\Senior;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use PharIo\Manifest\Manifest;

class MangeController extends Controller
{
    public function insert(SeniorRequest $request){
        $data = $request->validated();

        if($request->hasFile('back_id')){
            $data['back_id'] = $request->file('back_id')->store('media', 'public');
        }

        if($request->hasFile('profile_image')){
            $data['profile_image'] = $request->file('profile_image')->store('media', 'public');
        }

        if($request->hasFile('front_id')){
            $data['front_id'] = $request->file('front_id')->store('media', 'public');
        }


        $passenger = Senior::create([
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'email' => $data['email'],
            'contact_number' => $data['number'],
            'age' => $data['age'],
            'emergency_contact_person' => $data['emergency_contact_person'],
            'emergency_contact_number' => $data['emergency_contact_number'],
            'with_pension' => $data['pension'],
            'gender' => $data['gender'],
            'monthly_pension' => $data['monthlyPension'],
            'birthplace' => $data['birthplace'],
            'birthdate' => $data['birthdate'],
            'status' => $data['status'],
            'barangay' => $data['barangay'],
            'province' => $data['province'],
            'city' => $data['city'],
            'front_id' => $data['front_id'],
            'back_id' => $data['back_id'],
            'profile' => $data['profile_image'],
        ]);

        
      

        if($passenger){
            $response = 200;
        }else{
            $response = 500;
        }

        return response(compact('response'));
    }

    public function insertRegister(PassengerRequest $request){
        $data = $request->validated();

        $passenger = Senior::create([
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'email' => $data['email'],
            'contact_number' => $data['contact_number'],
            'age' => $data['age'],
            'emergency_contact_person' => $data['emergency_contact_person'],
            'emergency_contact_number' => $data['emergency_contact_number'],
            'with_pension' => $data['pension'],
            'gender' => $data['gender'],
            'monthly_pension' => $data['monthlyPension'],
            'birthplace' => $data['birthplace'],
            'birthdate' => $data['birthdate'],
            'status' => $data['status'],
            'barangay' => $data['barangay'],
            'province' => $data['province'],
            'city' => $data['city'],
        ]);

        
        $id = $passenger->id;

        if($passenger){
            $response = 200;
        }else{
            $response = 500;
        }

        return response(compact('response', 'id'));
    }

    public function store_barangay(BarangayRequest $request){
        $data = $request->validated();

        if($request->hasFile('logoImage')){
            $data['logoImage'] = $request->file('logoImage')->store('media', 'public');
        }

        $barangay = BarangayUser::create([
            'barangay_name' => $data['barangay_name'],
            'contact_number' => $data['contact_number'],
            'email' => $data['email'],
            'contact_person' => $data['contact_person'],
            'person_contact_number' => $data['person_contact_number'],
            'logoImage' => $data['logoImage'],
            'barangay' => $data['barangay'],
            'province' => $data['province'],
            'city' => $data['city'],
            'password' => bcrypt($data['password']),
        ]);

        // $store_user = User::create([
        //     'last_name' => $data['barangay_name'],
        //     'email' => $data['email'],
        //     'password' => bcrypt($data['password']),
        //     'role' => 'official'
        // ]);

        
      

        if($barangay){
            $response = 200;
        }else{
            $response = 500;
        }

        return response(compact('response'));

    }

    public function show(Passenger $passenger){
        return new PassengerResource($passenger);
    }
    
    public function get_seniors(){

        $get_media = Senior::all();

        return SeniorResrource::collection($get_media);

    }

    public function get_barangays(){

        $get_media = BarangayUser::orderBy('id', 'DESC')->get();

        return BarangayResource::collection($get_media);

    }

    public function get_barangay(Request $request){

        $get_media = BarangayUser::where('id', $request->id)->orderBy('id', 'DESC')->first();
        $get_password = User::where('id', 3)->first();

        $data =  BarangayResource::collection($get_media);

        $password = $get_password->password;

     //   return response(compact('data', 'password'));

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
            $image = [
                'back_id' => asset('./storage/'.$data->media->back_id),
                'front_id' => asset('./storage/'.$data->media->front_id),
                'selfie' => asset('./storage/'.$data->media->selfie),
                'study_load' => asset('./storage/'.$data->media->study_load),
            ];
            return json_encode(compact('data', 'image'));
            
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

    public function get_action(){
        $manifest = ManifestAction::where('id', 1)->first();
        $action = $manifest->action;
        $manifestDate = ManifestDate::where('status', 0)->first();

        return response(compact('action', 'manifestDate'));
    }
}
