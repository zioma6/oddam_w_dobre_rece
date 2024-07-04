import React from 'react';
import "../scss/_foundations.scss"
import TabsFoundations from "./TabsFoundations";
import MainTitle from "./MainTitle";

const Foundations = () => {
    return (
        <div id="fundacje" className="section__Foundations">
           <MainTitle title="Komu pomagamy?"/>
            <div className="Foundations__tabs">
                <TabsFoundations/>
            </div>
        </div>
    );
};

export default Foundations;