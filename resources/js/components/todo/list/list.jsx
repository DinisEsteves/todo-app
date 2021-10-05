import React from 'react';
import IconButton from '../../template/iconButton';

const List = (props) => {
  const renderRows = (props) => {
    const list = props.items || [];
    return list.map(todo => 
      (
      <tr key={todo.id}>
        <td className={todo.finished ? 'its-done' : ''}>{todo.description}</td>
        <td>
         <IconButton style="success" icon="check" hide={todo.finished} onClick={() => props.handleMarkAsFinished(todo)}></IconButton>
         <IconButton style="warning" icon="undo" hide={!todo.finished} onClick={() => props.handleUnfinished(todo)}></IconButton>
         <IconButton style="danger" icon="trash" onClick={() => props.handleDelete(todo)}></IconButton>
        </td>
      </tr>)
    )
  }
  return (
    <div className="row">
      <div className="col-lg-12">
        <table className="w-100">
          <thead>
            <tr>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows(props)}
          </tbody>
        </table>
      </div>
    </div>
   
  );
};

export default List;
