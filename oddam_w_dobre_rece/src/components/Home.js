import React from 'react';
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import Foundations from "./Foundations";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <div className="content">
                <Header/>
                <ThreeColumns/>
                <SimpleSteps/>
                <AboutUs/>
                <Foundations/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;