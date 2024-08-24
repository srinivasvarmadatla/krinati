import React from "react";
import './BodyScroll.css'


function BodyScroll(props){
    return(
            <img src={props.image} alt={props.alt}></img>
    );
}


export default BodyScroll;