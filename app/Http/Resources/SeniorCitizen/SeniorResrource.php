<?php

namespace App\Http\Resources\SeniorCitizen;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SeniorResrource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "last_name" => $this->last_name,
            "first_name" => $this->first_name,
            "email" => $this->email,
            "number" => $this->contact_number,
            "age" => $this->age,
            "monthlyPension" => $this->monthly_pension,
            "birthplace" => $this->birthplace,
            "emergency_contact_person" => $this->emergency_contact_person,
            "emergency_contact_number" => $this->emergency_contact_number,

            //image
            "profile_image" => asset('./storage/'.$this->profile),
            "front_id" => asset('./storage/'.$this->front_id),
            "back_id" => asset('./storage/'.$this->back_id),

            "birthdate" => $this->birthdate,
            "barangay" => $this->barangay,
            "province" => $this->province,
            "city" => $this->city,
            "gender" => $this->last_name,
            "pension" =>$this->with_pension,
            "status" => $this->status,
        ];
    }
}
