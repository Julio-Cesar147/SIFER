import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ferre from "../assets/ferre.png";
import Letras from "../assets/img/nombre.png";
import Lupa from "../assets/img/buscar.png";
import apiConnect from "../utils/api.connection";
const blue = "#282C37";
const orange = '#F75409';

const SinginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [response, setResponse] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const signin = async (e) => {
        e.preventDefault();

    try {
        const formData = { email, password }

        const result = await apiConnect.post('api/auth/', formData);
        const token = result.token

        localStorage.setItem('token', token)

        switch (result.role) {
            case 'Cliente':
                window.location.href = '/tools'
                break;
            case 'Empleado':
                window.location.href = '/orders'
                break;
            case 'Administrador':
                window.location.href = '/profile'
                break;
        
            default:
                break;
        }
     
        } catch (error) {
        console.error('no se front maistro, checa tu codigo, por que algo hiciste mal');
        
        }
    }

    const [searchTerm, setSearchTerm] = useState('');

return (
    <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="/"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="/">  Herramientas </a>

                        <ul class="navbar-nav me-5 w-100 ">
                            <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100 ms-5">
                                <input type="text" className="form-control rounded-pill" placeholder="Buscar" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                        </ul>
                        
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 17, width: 190, height: 35 }}
                            onClick={() => (window.location.href = '/login')}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

      {/* Espaciado debajo de la navbar */}
    <div style={{ marginTop: "8px" }}>
        <div className="d-flex justify-content-center align-items-center pt-5">
          {/* Contenedor de login */}
            <div className="border-0 shadow-lg rounded-lg d-flex flex-column flex-md-row w-75" style={{ minHeight: "70vh" }}>
                <div className="bg-secondary-subtle border-0 d-flex justify-content-center align-items-center w-100 w-md-50" style={{ minHeight: "20rem" }} >
                    <img src={ferre} alt="ferre" className="img-fluid" style={{ maxWidth: "80%", height: "auto" }}/>
                </div>

                {/* Formulario */}
                <div className="d-flex flex-column justify-content-center align-items-center p-4 bg-white w-100 w-md-50">
                    <p className="fw-medium fs-1 mb-4">¡Bienvenido!</p>
                    <form onSubmit={signin} className="w-75">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="username" placeholder="Usuario" required value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="username">Usuario</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type={showPassword ? "text" : "password"} className="form-control" id="password" placeholder="Contraseña" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">Contraseña</label>
                        </div>

                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="showPassword" onChange={togglePasswordVisibility}/>
                            <label className="form-check-label" htmlFor="showPassword"> Mostrar Contraseña </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-4" id="btn_login" >
                            Iniciar Sesión
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="fw-bold mb-0 text-danger"> ¿Aún no tienes cuenta? </p>
                        <p className="mb-0">  Regístrate gratis para conocer los lanzamientos y ofertas que tenemos para ti.</p>
                        <button className="btn fw-bold fs-5" style={{ color: orange }} onClick={() => (window.location.href = '/register')} >
                        Registrarse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default SinginPage;
