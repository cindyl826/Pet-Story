import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';


export function Nav() {


    return (
        <header>
            <nav className="nav-bar">
                <a className="logo-image" href="/">
                    <img id="logo" src="Icon.png" alt="Icon" />
                </a>
                <ul>
                    <li className="nav-element"><NavLink className="nav-item" to="/" activeClassName="active-link">Home</NavLink></li>
                    <li className="nav-element"><NavLink className="nav-item" to="/about" activeClassName="active-link">About us</NavLink></li>
                </ul>
            </nav>
            <h1>Pet Story</h1>
        </header>
    );
}