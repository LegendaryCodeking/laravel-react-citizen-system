<?php

namespace App\Http\Resources\SeniorCitizen;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BarangayResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->barangay_name,
            "barangay_name" => $this->barangay_name,
            "contact_number" => $this->contact_number,
            "contact_person" => $this->contact_person,
            "person_contact_number" => $this->person_contact_number,
            "email" => $this->email,
            "logoImage" => $this->logoImage,
            "barangay" => $this->barangay,
            "province" => $this->province,
            "city" => $this->city,
        ];
    }
}
