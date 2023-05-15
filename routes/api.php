<?php

use App\Http\Controllers\Passenger\MangeController;
use App\Http\Controllers\Passenger\MediaController;
use App\Http\Controllers\User\UserController;
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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/get-passengers', [MangeController::class, 'get_passengers']);
});


Route::post('/register', [MangeController::class, 'insert']);

Route::apiResource('/passengers', MangeController::class);

Route::apiResource('/media', MediaController::class);

Route::get('/get-media', [MediaController::class, 'get_media']);

Route::post('/store-media', [MediaController::class, 'store']);

// Route::middleware(['auth:passenger'])->group(function(){
//     Route::get('/dashboard', [MangeController::class, 'index']);
// });

Route::post('/user-login', [UserController::class, 'login']);