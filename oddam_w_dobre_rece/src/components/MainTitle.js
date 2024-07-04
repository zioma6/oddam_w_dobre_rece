import React from 'react';
import decoration from "../assets/images/Decoration.svg";
import "../scss/_mainTitle.scss"

const MainTitle = ({title}) => {
    return (
        <div className="MainTitles__titles">
            <h1 className="MainTitles__title">{title}</h1>
            <img className="MainTitles__decoration" src={decoration} alt="decoration"/>
        </div>
    );
};

export default MainTitle;