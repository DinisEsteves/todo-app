import React from 'react';
import If from '../../helpers/if'

const IconButton = (props) => {    
    return(
        <If> 
            <button className={'btn btn-'+props.style} onClick={props.onClick}>
                <i className={'fa fa-'+props.icon}></i>
            </button>
        </If>
    );
}

export default IconButton;