
import React from 'react';
import './General.css';
import { NavLink } from "react-router-dom";

function General() {
    return (
        <div className="container__flex container__general">
            <div className="container--flex container__general--inner">
                <div className="container--flex container__general--left">
                    <h3>Videos</h3>
                    <ul>
                        <li><a 
                        href="https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" 
                        rel="noreferrer" 
                        rel="noopener" 
                        target="_blank"
                        >Crash Course Computer Science
                        </a></li>
                    </ul>
                </div>
                <div className="container--flex container__general--center">
                    <h3>Articles</h3>
                </div>
                <div className="container--flex container__general--right">
                    <h3>Resources</h3>
                </div>
            </div>
            <div className="container--flex container__general--navlink"> 
                <NavLink to="/">
                    Menu
                </NavLink>
            </div>    
        </div>
    )
}

export default General
