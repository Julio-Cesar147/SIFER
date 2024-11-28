import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="dropdownmenu">
            <ul>
                <li><a href="/">Mis apartados</a></li>
                <li><a href="/">Productos</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
