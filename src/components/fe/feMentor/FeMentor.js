
import React from 'react';
import { NavLink } from "react-router-dom";
import "./FeMentor.css";
import FEMLogo from "./images/FrontendMentorLogo.png";
import FEMText from "./images/FrontendMentorText.png"

function FeMentor() {
    return (
        <div className="container--flex container__fementor">
        <div className="container--flex container__fementor--inner">
        <div className="container--flex container__fementor--left">
            <div className="container--flex container__fementor--img">
                <img src={FEMLogo} />
                <img src={FEMText} />
            </div>
        </div>
        <div className="container--flex container__fementor--right">
           <p className="para--frontendmentor">
            Fronten Mentor is a service that provides 
            a user with a series of designs, accessible 
            via <a href="https://www.figma.com/" rel="noreferrer" rel="noopener" target="_blank">
            Figma</a>, which can be used to build frontend projects for your portfolio.
           </p>
        </div>
    </div>
    <div className="container--flex container__fementor--navlink"> 
        <NavLink to="/">
            Menu
        </NavLink>
    </div>    
    </div>
    )
}

export default FeMentor;
