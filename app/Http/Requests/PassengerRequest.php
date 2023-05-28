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
            'gender' => 'required',
            'contact_number' => 'required|unique:passengers,contact_number',
            "barangay" => 'required',
            "province" => 'required',
            "city" => 'required',
            'birthdate' => 'required',
            'status' => 'required',
            "emergency_contact_person" => 'required',
            "emergency_contact_number" => 'required',
            "monthlyPension" => 'required',  
            "birthplace" => 'required',
            "pension" => 'required',
        ];
    }
}
