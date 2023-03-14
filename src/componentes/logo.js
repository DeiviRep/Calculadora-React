import React from "react";
import '../style/logo.css'

const Logo = (props) => (
    <img 
        src={props.img} 
        className="logo" 
        alt="Logo de frecodecamp" />
);

export default Logo;