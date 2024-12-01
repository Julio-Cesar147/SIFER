import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../../assets/img/logo.png';
import Letras from '../../assets/img/nombre.png';
import Lupa from '../../assets/img/buscar.png';

const blue = "#282C37"; // Asegúrate de definir las variables de color
const orange = "#F75409";

export const NavBarCliente = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Define el estado para el término de búsqueda

    return ( // Asegúrate de usar paréntesis para retornar el JSX
        <nav className="navbar navbar-expand-lg p-0 position-fixed w-100" style={{ top: 0, left: 0, zIndex: 1030 }}>
            <div style={{ backgroundColor: blue }} className="container-fluid">
                <a className="navbar-brand text-white" href="/tools">
                    <img src={Letras} style={{ width: 250, height: 50 }} alt="Letras" />
                </a>
                <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-5 w-50 ms-5">
                        <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100">
                            <input 
                                type="text" 
                                className="form-control rounded-pill" 
                                placeholder="Buscar" 
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                        </div>
                    </ul>
                    <a className="nav-link text-white fs-5 me-5" href="/tools"> Herramientas </a>
                    <a className="nav-link text-white fs-5 me-5" href="/cart">Apartados</a>
                    <button 
                        className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }} 
                        onClick={() => (window.location.href = '/login')} >
                        Salir
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBarCliente;