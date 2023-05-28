<?php

namespace App\Http\Requests\SeniorCitizen;

use Illuminate\Foundation\Http\FormRequest;

class SeniorRequest extends FormRequest
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
            "last_name" => 'required',
            "first_name" => 'required',
            "email" => 'required|email|unique:seniors,email',
            "number" => 'required|unique:seniors,contact_number',
            "age" => 'required',
            "monthlyPension" => 'required',  
            "birthplace" => 'required',
            "emergency_contact_person" => 'required',
            "emergency_contact_number" => 'required',
            "profile_image" => 'image',
            "front_id" => 'image',
            "back_id" => 'image',
            "birthdate" => 'required',
            "barangay" => 'required',
            "province" => 'required',
            "city" => 'required',
            "gender" => 'required',
            "pension" => 'required',
            "status" => 'required',
        ];
    }
}
