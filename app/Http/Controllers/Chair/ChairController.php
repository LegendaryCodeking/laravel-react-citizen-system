<?php

namespace App\Http\Controllers\Chair;

use App\Http\Controllers\Controller;
use App\Http\Resources\Sets\SetsResource;
use App\Models\ManifestData;
use App\Models\SetsModel;
use Illuminate\Http\Request;

class ChairController extends Controller
{
    public function get_sets(){
        $left = SetsModel::where('type', 'left_chair')->get();
        $right = SetsModel::where('type', 'right_chair')->get();

        $left_chair = SetsResource::collection(
            SetsModel::where('type', 'left_chair')->get()
        );
        $right_chair = SetsResource::collection($right);
        return response(compact('right_chair', 'left_chair'));
    }

    public function assign_set(Request $request){
        $update = [
            'set_number' => $request->set_number
        ];
        $assign = ManifestData::where('id', $request->manifest_id)->update($update);

        if($assign){

            $set = SetsModel::where('set', $request->set_number)->first();
            $set->status = 1;
            $set->save();

            return response(200);
        }else{
            return response('error');
        }
    }
}
