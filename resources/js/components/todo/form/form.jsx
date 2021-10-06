import React  from 'react';
import Grid from '../../template/grid';
import IconButton from '../../template/iconButton';

const Form = (props) => {
  return (
    <div className='row'>
        <Grid cols='8 8 8 8'> 
          <input id='description' className='form-control' placeholder='Insert a new task' onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='4 4 4 4'> 
          <IconButton style='primary' icon='plus' onClick={props.handleAdd}/> 
          <IconButton style='secondary' icon='search' onClick={props.handleSearch}/> 
          <IconButton style='secondary' icon='times' text="clean" onClick={props.handleCleanForm}/> 
        </Grid>
    </div>
  );
};

export default Form;
