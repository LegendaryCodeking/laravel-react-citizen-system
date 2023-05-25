<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ManifestDataRequest;
use App\Http\Requests\Admin\ManifestRequest;
use App\Models\ManifestAction;
use App\Models\ManifestData;
use App\Models\ManifestDate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManifestController extends Controller
{
    public function store(ManifestRequest $request){
        $data = $request->validated();

        $save_manifest = ManifestDate::create($data);

        if(!$save_manifest){
            return response([
                'message' => 'error'
            ], 422);
        }

        $action = [
            'action' => 'true'
        ];

        ManifestAction::where('id', 1)->update($action);
        $id = $save_manifest->id;
        $status = 200;

        return response(compact('id', 'status'));
    }

    public function store_manifest_data(ManifestDataRequest $request){
        $data = $request->validated();
        $validate = ManifestData::where('passengers_id', $data['passengers_id'])->first();

        if($validate){
            return response(403);
        }else{
            $save = ManifestData::create($data);
            $id = $save->id;
            if(!$save){
                return response(422);
            }

            $status = 200;
    
            return response(compact('status', 'id'));
        }
    }

    public function passengers(){
        $data = DB::table('manifest_data')
                    ->join('passengers', 'passengers.id', '=', 'manifest_data.passengers_id')
                    ->where('manifest_data.manifest_dates_id', 10)
                    ->get();

        return json_encode($data);
    }
}
