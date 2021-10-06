import React from 'react';
import If from '../../helpers/if'

const IconButton = (props) => {    
    const todoId = props.id || null
    return(
        <If hide={props.hide}> 
            <button id={todoId} className={'btn btn-'+props.style} onClick={props.onClick}>
                <i className={'fa fa-'+props.icon}></i>
                <span> {props.text}</span>
            </button>
        </If>
    );
}

export default IconButton;