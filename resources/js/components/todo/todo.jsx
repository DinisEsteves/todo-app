import React from 'react';
import PageHeader from '../template/pageHeader';
import Form from './form';
import List from './list';

const Todo = () => {
  return (
    <div>
      <PageHeader name='Todos' small='Login' />
      <Form />
      <List />
    </div>
  );
};

export default Todo;
