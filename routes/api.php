<?php

use App\Http\Controllers\Passenger\MangeController;
use App\Http\Controllers\Passenger\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [MangeController::class, 'insert']);

Route::apiResource('/passengers', MangeController::class);

Route::apiResource('/media', MediaController::class);

Route::get('/get-media', [MediaController::class, 'get_media']);

Route::post('/store-media', [MediaController::class, 'store']);

// Route::middleware(['auth:passenger'])->group(function(){
//     Route::get('/dashboard', [MangeController::class, 'index']);
// });