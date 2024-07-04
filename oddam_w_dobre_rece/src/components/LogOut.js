import React from 'react';
import MainTitle from "./MainTitle";
import {Link} from "react-router-dom";
import "../scss/_logOut.scss"

const LogOut = () => {
    return (
        <div className="LogOut__section">
            <MainTitle claasName="LogOut__title" title="Wylogowanie nastąpiło pomyślnie!"/>
            <Link to="/">
                <button className="LogOut__button">Strona Główna</button>
            </Link>
        </div>
    );
};

export default LogOut;