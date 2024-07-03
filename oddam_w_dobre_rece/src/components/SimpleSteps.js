import React from 'react';
import Card from "./Card";
import "../scss/_simpleSteps.scss"
import decoration from "../assets/images/Decoration.svg"
import Icon1 from "../assets/images/Icon-1.svg"
import Icon2 from "../assets/images/Icon-2.svg"
import Icon3 from "../assets/images/Icon-3.svg"
import Icon4 from "../assets/images/Icon-4.svg"
import Button from "./Button";


const SimpleSteps = () => {

    return (
        <div id="ocoChodzi" className="section__SimpleSteps">
            <div className="SimpleSteps__titles">
                <h1 className="SimpleSteps__title">Wystarczą 4 proste kroki</h1>
                <img className="SimpleSteps__decoration" src={decoration} alt="decoration"/>
            </div>
            <div className="SimpleSteps__cards">
               <Card icon_url={Icon1} title="Wybierz rzeczy" text="ubrania, zabawki, sprzęt i inne" class_name="card_t-shirt"/>
                <Card icon_url={Icon2} title="Spakuj je" text="skorzystaj z worków na śmieci" class_name="card_bag"/>
                <Card icon_url={Icon3} title="Zdecyduj komu chcesz pomóc" text="wybierz zaufane miejsce" class_name="card_loupe"/>
                <Card icon_url={Icon4} title="Zamów kuriera" text="kurier przyjedzie w dogodnym terminie" class_name="card_arrows"/>
            </div>
            <div className="SimpleSteps__buttons">
               <Button class_name="SimpleSteps__button" text="ODDAJ RZECZY" path="/zaloguj"/>
            </div>
        </div>
    );
};

export default SimpleSteps;