<?php

namespace App\Http\Resources\Passenger;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PassengerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->last_name.' '.$this->first_name,
            'email' => $this->email,
            'age' => $this->age,
            'contact_number' => $this->contact_number,
            'middle_initial' => $this->middle_initial,
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'status' => $this->status,
            'religion' => $this->religion,
            'type' => $this->type,
            'verified' => $this->verified,
            'password' => $this->password,
            'qrcode_hash' => $this->qrcode_hash,
            'created_at' => Carbon::parse($this->created_at)->format('m-d-Y'),
            'updated_at' => $this->updated_at,
            'address' => $this->address,
            'citizenship' => $this->citizenship,

            'back_id' => asset('./storage/'.$this->media->back_id),
            'front_id' => asset('./storage/'.$this->media->front_id),
            'selfie' => asset('./storage/'.$this->media->selfie),
            'study_load' => asset('./storage/'.$this->media->study_load)
        ];
    }
}
