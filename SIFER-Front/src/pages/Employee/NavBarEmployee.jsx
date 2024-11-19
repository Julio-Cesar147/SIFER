import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/img/logo.png';
import Perfil from '../../assets/img/perfil.png';
import Historial from '../../assets/img/historial.png';
import Employees from '../../assets/img/employees.png'; // Asegúrate de que este archivo exista

const blue = "#282C37";
const orange = '#F75409';

const NavBarEmployee = () => {
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg p-0">
            <div style={{ backgroundColor: blue }} className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    <img src={Logo} style={{ width: 100, height: 70 }} alt="Logo" />
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
                        {/* Contenedor centrado con Flexbox */}
                        <div className="bg-white rounded-pill border border-dark-subtle d-flex">
                            <a className="nav-link active px-5" href="/profile"
                                onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}
                                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}>
                                <img src={Perfil} style={{ width: 41, height: 41, transform: hovered1 ? 'scale(1.1)' : 'scale(1)', filter: hovered1 ? 'brightness(1.2)' : 'brightness(1)' }} alt="perfil" />
                            </a>

                            <a className="nav-link active px-5" href="#"
                                onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}
                                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}>
                                <img src={Employees} style={{ width: 41, height: 41, transform: hovered2 ? 'scale(1.1)' : 'scale(1)', filter: hovered2 ? 'brightness(1.2)' : 'brightness(1)' }} alt="employees" />
                            </a>

                            <a className="nav-link active px-5" href="#"
                                onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)}
                                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}>
                                <img src={Historial} style={{ width: 41, height: 41, transform: hovered3 ? 'scale(1.1)' : 'scale(1)', filter: hovered3 ? 'brightness(1.2)' : 'brightness(1)' }} alt="historial" />
                            </a>
                        </div>
                    </ul>

                    <button className="btn rounded-pill fs-5" style={{ backgroundColor: orange, width: 80, height: 37 }}>Salir</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBarEmployee;
