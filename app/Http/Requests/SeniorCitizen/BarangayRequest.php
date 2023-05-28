<?php

namespace App\Http\Requests\SeniorCitizen;

use Illuminate\Foundation\Http\FormRequest;

class BarangayRequest extends FormRequest
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
            "barangay_name" =>  "required",
            "contact_number" =>  "required",
            "contact_person" =>  "required",
            "person_contact_number" =>  "required",
            "email" =>  "required",
            "logoImage" =>  "required",
            "barangay" =>  "required",
            "province" =>  "required",
            "city" => "required",

            "password" => "required",
        ];
    }
}
