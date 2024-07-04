import React from 'react';
import decoration from "../assets/images/Decoration.svg"
import homeHeroImage from "../assets/images/Home-Hero-Image.jpg"
import "../scss/_header.scss"
import Button from "./Button";

const Header = () => {
    return (
        <div id="start" className="section__Header">
            <div className="Header__image">
                <img src={homeHeroImage} alt="things"/>
            </div>
            <div className="Header__card">
                <div className="Header__card--titles">
                    <h1 className="Header__card--title">Zacznij pomagać! </h1>
                    <h1 className="Header__card--title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                <img className="Header__card--decoration" src={decoration} alt="decoration"/>
                <div className="Header__card--btns">
                    <Button class_name="Header__card--btn  btn__primary" text="ODDAJ RZECZY" path="/zaloguj"/>
                    <Button class_name="Header__card--btn btn__secondary" text="ZORGANIZUJ ZBIÓRKĘ" path="/zaloguj"/>
                </div>
            </div>
        </div>
    );
};
export default Header;