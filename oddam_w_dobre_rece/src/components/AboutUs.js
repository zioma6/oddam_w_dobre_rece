import React from 'react';
import decoration from "../assets/images/Decoration.svg";
import sign from "../assets/images/Signature.svg";
import imagePeople from "../assets/images/People.jpg"
import "../scss/_aboutUs.scss"

const AboutUs = () => {
    return (
        <div id="onas" className="section__AboutUs">
            <div className="AboutUs__titles">
                <h1 className="AboutUs__title">O nas</h1>
                <img className="AboutUs__decoration" src={decoration} alt="decoration"/>
                <p className="AboutUs__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
                    celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="AboutUs__sign" src={sign} alt="decoration"/>
            </div>
            <div className="AboutUs__image">
                <img src={imagePeople} alt="people"/>
            </div>
        </div>
    );
};

export default AboutUs;