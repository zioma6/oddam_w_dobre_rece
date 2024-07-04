import React from 'react';
import MainTitle from "./MainTitle";
import {Link} from "react-router-dom";
import "../scss/_signIn.scss"

const SignIn = () => {
    return (
        <div className="SignIn__section">
            <MainTitle title="Załóż konto"/>
            <div className="SignIn__form">
                <div className="SignIn__form--group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="SignIn__form--group">
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
                <div className="SignIn__form--group">
                    <label htmlFor="password">Powtórz hasło</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
            </div>
            <div className="SignIn__buttons">
                <Link to="/logowanie">
                    <button className="LogIn__button">Zaloguj</button>
                </Link>
                <Link to="/">
                    <button className="LogIn__button">Załóż konto</button>
                </Link>

            </div>
        </div>
    );
};

export default SignIn;