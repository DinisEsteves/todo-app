<?php

namespace App\Http\Filters;

class TodoFilters extends QueryFilter{

    public function description($description = ''){
        return $this->builder->where('description' , 'like' ,'%'.$description.'%');
    }

}