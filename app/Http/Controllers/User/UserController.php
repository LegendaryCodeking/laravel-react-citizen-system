<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function login(LoginRequest $loginRequest){
        $credentials = $loginRequest->validated();

        if(!Auth::attempt($credentials)){
            return response([
                'message_error' => 'Invalid Credentials'
            ], 422);
        }

       /** @var User $user **/
        $user = Auth::user();
        $user_token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'user_token'));
    }
}
