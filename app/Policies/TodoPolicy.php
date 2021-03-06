<?php

namespace App\Policies;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TodoPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any todo.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the todo.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Todo  $todo
     * @return mixed
     */
    public function view(User $user, Todo $todo)
    {
        //
    }

    /**
     * Determine whether the user can create todo.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the todo.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Todo  $todo
     * @return mixed
     */
    public function update(User $user, Todo $todo)
    {
        //
    }

    /**
     * Determine whether the user can delete the todo.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Todo  $todo
     * @return mixed
     */
    public function delete(User $user, Todo $todo)
    {
        //
    }

    /**
     * Determine whether the user can restore the todo.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Todo  $todo
     * @return mixed
     */
    public function restore(User $user, Todo $todo)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the todo.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Todo  $todo
     * @return mixed
     */
    public function forceDelete(User $user, Todo $todo)
    {
        //
    }
}
