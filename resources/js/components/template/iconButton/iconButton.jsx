import React from 'react';
import If from '../../helpers/if'

const IconButton = (props) => {    
    const todoId = props.id || null
    return(
        <If> 
            <button id={todoId} className={'btn btn-'+props.style} onClick={props.onClick}>
                <i className={'fa fa-'+props.icon}></i>
            </button>
        </If>
    );
}

export default IconButton;