
import React from 'react';
import { NavLink } from "react-router-dom";
import HackDesignLogo from './images/hackdesign.png';
import "./Hackdesign.css";


function FeMentor() {
    return (
        <div className="container--flex container__fementor">
        <div className="container--flex container__fementor--inner">
        <div className="container--flex container__fementor--left">
            <div className="container--flex container__fementor--img">
                <a href="https://hackdesign.org/" rel="noreferrer" rel="noopener" target="_blank"><img src={HackDesignLogo} /></a>
                
            </div>
        </div>
        <div className="container--flex container__fementor--right">
           <p className="para--frontendmentor">
            <a href="https://hackdesign.org/" rel="noreferrer" rel="noopener" target="_blank">Hack Design</a> is a service that provides 
            a user with lessons about design fundamentals. From visual hirearchy to typography, the lessons 
            give a progressive intorduction to design, building up to advance User Interface and User Experience 
            design.
           </p>
           <p className="para--frontendmentor">
               A paid-for service, Hack Design offers 101 lessons for free, so even if you dont' choose to pay,
               there is a lot of good knowledge to be gleaned. 
           </p>
        </div>
    </div>
    <div className="container--flex container__fementor--navlink"> 
        <NavLink to="/frontend">
            Frontend
        </NavLink>
        <NavLink to="/">
            Menu
        </NavLink>
    </div>    
    </div>
    )
}

export default FeMentor;