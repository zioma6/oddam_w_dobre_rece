import React from 'react';
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import "../scss/_navigation.scss"


const Navigation = () => {
    return (
        <div className="navigation__container">
            <section className="navigation__up">
                <nav>
                    <Link to="/logIn">
                        <button>Zaloguj</button>
                    </Link>
                    <Link to="/signIn">
                        <button>Załóż konto</button>
                    </Link>
                </nav>
            </section>
            <section className="navigation__scroll">
                <nav>
                    <ScrollLink classNAme="scroll__btn" to="start" smooth={true} duration={500}>Start</ScrollLink>
                    <ScrollLink classNAme="scroll__btn" to="ocoChodzi" smooth={true} duration={500}>O co chodzi?</ScrollLink>
                    <ScrollLink classNAme="scroll__btn" to="onas" smooth={true} duration={500}>O nas</ScrollLink>
                    <ScrollLink classNAme="scroll__btn" to="fundacje" smooth={true} duration={500}>Fundacje i organizacje</ScrollLink>
                    <ScrollLink classNAme="scroll__btn" to="kontakt" smooth={true} duration={500}>Kontakt</ScrollLink>
                </nav>
            </section>
        </div>
    );
};


export default Navigation;