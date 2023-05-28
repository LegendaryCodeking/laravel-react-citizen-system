<?php

namespace App\Http\Controllers\Passenger;

use App\Http\Controllers\Controller;
use App\Http\Requests\MediaRequest;
use App\Http\Resources\Passenger\MediaResource;
use App\Models\Media;
use App\Models\SeniorCitize\Senior;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function store(MediaRequest $request){
        $data = $request->validated();

        if($request->hasFile('front_id')){
            $data['front_id'] = $request->file('front_id')->store('media', 'public');
        }

        if($request->hasFile('back_id')){
            $data['back_id'] = $request->file('back_id')->store('media', 'public');
        }

        if($request->hasFile('selfie')){
            $data['selfie'] = $request->file('selfie')->store('media', 'public');
        }

        $get_senior = Senior::where('id', $request->passengers_id)->first();

        $get_senior->profile = $data['selfie'];
        $get_senior->front_id = $data['front_id'];
        $get_senior->back_id = $data['back_id'];

        $save_media = $get_senior->save();

        if($save_media){
            $status = 200;
        }

        return response(compact('status'));
    }

    public function show(Media $media){
        return new MediaResource($media);
    }

    public function get_media(Request $request){
        $data = Media::where('passengers_id', $request->passenger)->first();

        return new MediaResource($data);
    }
}
