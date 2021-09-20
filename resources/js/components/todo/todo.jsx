import React,{useState} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import Form from './form';
import List from './list';

const URL = 'http://localhost/api/todos';

const Todo = () => {
  const [state, setState] = useState({'description' : '' , 'list' : []}) 

  const handleChange = (e) => {
    setState({'description' : e.target.value , 'list' : []});
  } 

  const handleAdd = () => {
    const description = state.description;
    axios.post(URL, {description}).then(resp => refresh())
  } 

  const refresh = () => {
      axios.get(URL).then(res => setState({'description' : '' , 'list' : res.data}));
  } 

  return (
    <div>
      <PageHeader name='Todos' small='Login' />
      <Form description={state.description} handleAdd={handleAdd} handleChange={handleChange}/>
      <List />
    </div>
  );
};

export default Todo;
