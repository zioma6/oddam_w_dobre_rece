import React from 'react';
import MainTitle from "./MainTitle";
import "../scss/_logIn.scss"
import {Link} from "react-router-dom";

const LogIn = () => {
    return (
        <div className="LogIn__section">
            <MainTitle title="Zaloguj się"/>
            <div className="LogIn__form">
                <div className="LogIn__form--group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="LogIn__form--group">
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
            </div>
            <div className="LogIn__buttons">
                <Link to="/rejestracja">
                    <button className="LogIn__button">Załóż konto</button>
                </Link>
                <Link to="/">
                    <button className="LogIn__button">Zaloguj</button>
                </Link>
            </div>
        </div>
    );
};

export default LogIn;