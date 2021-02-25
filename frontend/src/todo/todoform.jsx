import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconbutton';

export default props =>(
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa' input={props.description} onChange={props.handleChange}/>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}>
                <i className='fa fa-plus'></i>
            </IconButton>
        </Grid>
    </div>
);