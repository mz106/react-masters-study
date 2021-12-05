
import React from 'react';
import { NavLink } from "react-router-dom";
import "./Interview.css";

function Interview() {
    return (
        <div className="container--flex container__interview">
            <div className="container--flex container__interview--inner">
            <div className="container--flex container__interview--left">
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
            <div className="container--flex container__interview--center">
                <h3>Articles</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="container--flex container__interview--right">
                <h3>Resources</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="container--flex container__interview--navlink"> 
            <NavLink to="/">
                Menu
            </NavLink>
        </div>    
        </div>
    )
}

export default Interview
