<?php

namespace App\Http\Resources\Passenger;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
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
            'passengers_id' => $this->passengers_id,
            'front_id' => $this->front_id,
            'back_id' => $this->back_id,
            'study_load' => $this->study_load
        ];
    }
}
