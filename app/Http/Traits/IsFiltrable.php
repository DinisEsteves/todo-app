<?php

namespace App\Http\Traits;
use App\Http\Filters\QueryFilter;

trait IsFiltrable{

    public function scopeFilter($query, QueryFilter $filters){
        return $filters->apply($query);
    }

}