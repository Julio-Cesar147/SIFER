import React from 'react';
import '../assets/css/NavBar.css'

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
