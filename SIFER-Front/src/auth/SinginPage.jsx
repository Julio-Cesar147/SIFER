import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Logo from '../assets/img/logo.png'
import Letras from '../assets/img/nombre.png'
import Lupa from '../assets/img/buscar.png'
import { Button, FloatingLabel, Label } from 'flowbite-react';
const blue = "#282C37";
const orange = '#F75409';

export const SinginPage = () => {

    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);

    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="#"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="#">  Herramientas </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white">
                            <input style={{width: 450}} class="bg-transparent border-0 rounded-pill text-dark" type="search" placeholder="Buscar"/>
                            <img src={Lupa} style={{width:25, height:27}} className='me-2'/>
                        </div>
                    </ul>
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

        <div className="d-flex justify-content-center align-items-center pt-5">
            <div className="border-0 shadow rounded-lg d-flex w-75">
                <div className="bg-secondary-subtle border-0 d-flex justify-content-center align-items-center" style={{ width: '50%', height: '30rem' }}>
                    <img src={Logo} alt="Logo" className='w-100 h-auto ' />
                </div>
                
                <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ width: '50%' }}>
                    <p className="fw-medium fs-4 mb-4">Iniciar Sesión</p>
                        <form className="w-75">
                            <div className="mb-3">
                                <Label htmlFor="username" className="form-label fw-bold text-primary">Usuario:</Label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Usuario" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-bold text-primary">Contraseña:</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="********" required/>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-4"> Iniciar Sesión </button>
                        </form>

                        <div className="text-center">
                            <p className="fw-bold mb-0 text-danger">¿Aún no tienes cuenta?</p>
                            <p className="mb-0">Regístrate gratis para conocer los lanzamientos y ofertas que tenemos para ti.</p>
                            <button className="btn fw-bold fs-5" style={{color: orange}}>  Registrarse </button>
                        </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default SinginPage;