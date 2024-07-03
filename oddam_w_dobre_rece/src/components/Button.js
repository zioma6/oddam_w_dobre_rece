import React from 'react';
import {Link} from "react-router-dom";
import "../scss/_button.scss"

const Button = ({class_name,text,path}) => {

    return (
        <Link to={path}>
            <button className={"btn" + " " + {class_name}  }>{text}</button>
        </Link>
    );
};

export default Button;