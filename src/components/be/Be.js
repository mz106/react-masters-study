
import React from 'react';
import { NavLink } from "react-router-dom";
import "./Be.css";

function Be() {
    return (
        <div className="container--flex container__be">
            <div className="container--flex container__be--inner">
            <div className="container--flex container__be--left">
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
            <div className="container--flex container__be--center">
                <h3>Articles</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="container--flex container__be--right">
                <h3>Resources</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="container--flex container__be--navlink"> 
            <NavLink to="/">
                Menu
            </NavLink>
        </div>    
        </div>
    )
}

export default Be
