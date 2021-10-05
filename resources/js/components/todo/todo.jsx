import React,{useState,useEffect} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import Form from './form';
import List from './list';

const URL = 'http://localhost/api/todos';

const Todo = () => {
  const [state, setState] = useState({'description' : '' , 'list' : []}) 

  const handleChange = (e) => {
    setState({'description' : e.target.value , 'list' : state.list});
  } 

  const handleAdd = () => {
    const description = state.description;
    axios.post(URL, {description}).then(resp => refresh())
  } 

  const handleDelete = (item) => {
   axios.delete(`${URL}/${item.id}`).then(resp => refresh())
  } 

  const handleMarkAsFinished = (item) => {
   axios.patch(`${URL}/${item.id}`, {...item, finished : 1}).then(resp => refresh())
  }

  const handleUnfinished = (item) => {
   axios.patch(`${URL}/${item.id}`, {...item, finished : 0}).then(resp => refresh())
  } 

  const refresh = () => {
    axios.get(URL).then(res => setState({'description' : '' , 'list' : res.data}));
  } 

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <PageHeader name='Todos' small='Login' />
      <Form description={state.description} handleAdd={handleAdd} handleChange={handleChange}/>
      <List handleUnfinished={handleUnfinished} handleMarkAsFinished={handleMarkAsFinished} handleDelete={handleDelete} items={state.list.data}/>
    </div>
  );
};
export default Todo;
