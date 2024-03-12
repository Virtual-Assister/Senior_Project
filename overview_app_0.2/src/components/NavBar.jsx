import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className ="title">Degreee Overview</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/developement ">Developement</Link>
                </li>
            </ul>
        </nav>
    );
};
