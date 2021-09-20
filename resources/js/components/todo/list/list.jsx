import React from 'react';

const List = (props) => {
  const renderRows = (props) => {
    const list = props.items || [];
    return list.map(todo => 
      (<tr key={todo.id}><td>{todo.description}</td></tr>)
    )
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {renderRows(props)}
      </tbody>
    </table>
  );
};

export default List;
