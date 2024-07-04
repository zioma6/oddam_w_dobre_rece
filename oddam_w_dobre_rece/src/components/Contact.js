import React from 'react';
import MainTitle from "./MainTitle";
import imageCloths from "../assets/images/Background-Contact-Form.jpg";
import Form from "./Form";
import "../scss/_contact.scss"

const Contact = () => {
    return (
        <div id="kontakt" className="section__Contact">
                <div className="Contact__form">
                    <MainTitle title="Skontaktuj się z nami"/>
                    <Form/>
                </div>

        </div>
    );
};

export default Contact;