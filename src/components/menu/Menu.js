
import React from 'react';
import "./Menu.css";
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div className="container--flex container__menu">
            <nav className="container--flex menu__nav">
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/general">
                    General
                </NavLink>
                <NavLink to="/frontend">
                    Front End
                </NavLink>
                <NavLink to="/backend">
                    Back End
                </NavLink>
                <NavLink to="/interview">
                    Interview
                </NavLink>
            </nav>
        </div>
    )
}

export default Menu
