<?php

namespace App\Http\Resources\Sets;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SetsResource extends JsonResource
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
            'set' => $this->set,
            'type' => $this->type,
            'status' => $this->status,
        ];
    }
}
