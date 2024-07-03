import React from 'react';
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import Foundations from "./Foundations";

const Home = () => {
    return (
        <div>
            <div className="content">
                <Header/>
                <ThreeColumns/>
                <SimpleSteps/>
                <AboutUs/>
                <Foundations/>




                <div id="kontakt" className="section">
                    <h1>Kontakt</h1>
                    <p>Treść sekcji Kontakt...</p>
                </div>
            </div>
        </div>
    );
};

export default Home;