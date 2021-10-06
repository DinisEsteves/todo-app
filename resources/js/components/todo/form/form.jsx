import React  from 'react';
import Grid from '../../template/grid';
import IconButton from '../../template/iconButton';

const Form = (props) => {
  return (
    <div className='row'>
        <Grid cols='11 11 11 11'> 
          <input id='description' className='form-control' placeholder='Insert a new task' onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='1 1 1 1'> 
          <IconButton style='primary' onClick={props.handleAdd} icon='plus'/> 
        </Grid>
    </div>
  );
};

export default Form;
