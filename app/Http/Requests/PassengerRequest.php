<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PassengerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:passengers,email',
            'citizenship' => 'required',
            'age' => 'required',
            'religion' => 'required',
            'type' => 'required',
            'gender' => 'required',
            'contact_number' => 'required',
            'address' => 'required',
            'middle_initial' => 'required',
            'birthdate' => 'required',
            'status' => 'required',
        ];
    }
}
