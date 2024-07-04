import React from 'react';
import "../scss/_footer.scss"
import facebook from "../assets/images/Facebook.svg"
import instagram from "../assets/images/Instagram.svg"


const Footer = () => {
    return (
        <div className="Footer">
            <div class="Footer__content">
                <div className="Footer__text">Copyright by Coders Lab</div>
                <div className="Footer__icons">
                    <a href="#facebook"><img src={facebook} alt="Facebook"/></a>
                    <a href="#instagram"><img src={instagram} alt="Instagram"/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;