import React  from 'react';
import Grid from '../../template/grid';
import IconButton from '../../template/iconButton';

const Form = (props) => {
  return (
    <div role='form' className='todoForm'>
      <div className='row'>
        <Grid cols='12 9 10'> 
          <input id='description' className='form-control' placeholder='Insert a new task' onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='12 3 2'> 
          <IconButton style='primary' onClick={props.handleAdd} icon='plus'/> 
        </Grid>
      </div>
    </div>
  );
};

export default Form;
