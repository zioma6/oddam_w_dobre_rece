import React from 'react';
import "../scss/_threeColumns.scss"
import threeColumns from "../assets/images/Home - ThreeColumns.png"

const ThreeColumns = () => {
    return (
        <div className="section__ThreeColumns">
            <img className="ThreeColumns__images" src={threeColumns} alt="statistic"/>
        </div>
    );
};

export default ThreeColumns;