import React from 'react';
import decoration from "../assets/images/Decoration.svg";
import "../scss/_foundations.scss"
import TabsFoundations from "./TabsFoundations";

const Foundations = () => {
    return (
        <div id="fundacje" className="section__Foundations">
            <div className="Foundations__titles">
                <h1 className="Foundations__title">Komu pomagamy?</h1>
                <img className="Foundations__decoration" src={decoration} alt="decoration"/>
            </div>
            <div className="Foundations__tabs">
                <TabsFoundations/>
            </div>

        </div>
    );
};

export default Foundations;