<?php

use App\Http\Controllers\Admin\ManifestController;
use App\Http\Controllers\Chair\ChairController;
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

    Route::get('/manifest-action', [MangeController::class, 'get_action']);

    Route::get('/get-passengers-approved', [MangeController::class, 'get_passengers_approved']);

    Route::get('profile_passengers', [MangeController::class, 'profile']);

    Route::put('/approve-registration', [MangeController::class, 'approve']);

    Route::post('/store-manifest', [ManifestController::class, 'store']);

    Route::post('/store-manifest-data', [ManifestController::class, 'store_manifest_data']);

    Route::post('/admin-logout', [UserController::class, 'logout']);

    Route::post('/insert-set', [UserController::class, 'insert_set']);

    Route::get('/get-sets', [ChairController::class, 'get_sets']);

    Route::get('/get-passenger-manifest', [ManifestController::class, 'passengers']);

    Route::put('/assign-set', [ChairController::class, 'assign_set']);
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