import React from "react";

const If = (props) => {
    if(!props.hide){
        return props.children
    }else{
        return false
    } 
}

export default If;