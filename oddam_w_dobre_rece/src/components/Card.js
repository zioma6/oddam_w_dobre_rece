import React from 'react';
import "../scss/_card.scss"

const Card = ({icon_url, title, text, class_name}) => {
    const className = `SimpleSteps__card ${class_name}`


    return (
        <div className={className}>
            <div className="card__icon">
                <img src={icon_url} alt=""/>
            </div>
            <div className="card__title">{title}</div>
            <div className="card__line"></div>
            <div className="card__text">{text}</div>
        </div>
    );
};

export default Card;