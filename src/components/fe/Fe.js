
import React from 'react';
import { NavLink } from "react-router-dom";
import FeMentor from './feMentor/FeMentor';
import "./Fe.css";

function Fe() {  
    return (
        <div className="container__flex container__fe">
        <div className="container--flex container__fe--inner">
            <div className="container--flex container__fe--left">
                <h3>Videos</h3>
                <ul>
                    <li><a 
                    href="#" 
                    rel="noreferrer" 
                    rel="noopener" 
                    target="_blank"
                    >Video one
                    </a></li>
                </ul>
            </div>
            <div className="container--flex container__fe--center">
                <h3>Articles</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="container--flex container__fe--right">
                <h3>Resources</h3>
                <ul>
                    <li>
                        <NavLink to="/fe/fementor">
                            Front End Mentor
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container--flex container__fe--navlink"> 
            <NavLink to="/">
                Menu
            </NavLink>
        </div>    
    </div>
    )
}

export default Fe
