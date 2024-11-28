import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Logo from '../assets/img/logo.png'
import Letras from '../assets/img/nombre.png'
import Lupa from '../assets/img/buscar.png'
import { Button, FloatingLabel, Label } from 'flowbite-react';
const blue = "#282C37";
const orange = '#F75409';

const Register = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Funcionalidad de autenticación
    };

    return(
        <>
            <nav class="navbar navbar-expand-lg p-0 ">
                <div style={{backgroundColor: blue}} class="container-fluid">
                    <a class="navbar-brand text-white" href="#"> 
                        <img src={Letras} style={{width: 250, height: 50}} />
                    </a>
                    
                    <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
                        <a class= "nav-link text-white fs-4" href="/Home">  Herramientas </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <div class="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white">
                            <input style={{width: 450}} class="bg-transparent border-0 rounded-pill text-dark" type="search" placeholder="Buscar"/>
                            <img src={Lupa} style={{width:25, height:27}} className='me-2'/>
                        </div>
                    </ul>
                        <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }}
                            onClick={() => (window.location.href = '/')}>
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </nav>

        <div className="d-flex justify-content-center align-items-center pt-5">
            <div className="border-0 shadow rounded-lg d-flex w-75">
                <div className="bg-secondary-subtle border-0 d-flex justify-content-center align-items-center" style={{ width: '50%', height: 'auto' }}>
                    <img src={Logo} alt="Logo" className='w-100 h-auto ' />
                </div>
                
                <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ width: '50%' }}>
                    <p className="fw-medium fs-4 mb-4">Registrarse</p>
                        <form className="w-75">
                            <div className="mb-3">
                                <Label htmlFor="username" className="form-label fw-bold text-primary">Nombre:</Label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Usuario" required/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastnames" className="form-label fw-bold text-primary">Apellidos:</label>
                                <input type= "text" className="form-control" id="apellidos" name="lastnames" placeholder='Apellidos' required/>
                            </div>
                            
                            <div className="d-flex mb-3">
                                <div className="col-6">
                                    <label htmlFor="date" className='form-label fw-bold text-primary'>Fecha de Nacimiento:</label>
                                    <input type="text" className='form-control' id='date' name='date' placeholder='Fecha de nacimiento' required/>
                                </div>
                                <div className="col-6 ms-2">
                                    <label htmlFor="phone" className='form-label fw-bold text-primary'>Teléfono:</label>
                                    <input type="text" className='form-control' id='phone' name='phone' placeholder='Núemero telefonico' required/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className='form-label fw-bold text-primary'>Correo Electrónico:</label>
                                <input type="text" className='form-control' id='email' name='phone' placeholder='Correo electrónico' required/>
                            </div>

                            <div className="d-flex mb-3">
                            <input type={showPassword ? "text" : "password"} className="form-control" name="password" placeholder='********'/>
                            <button type="button" className="btn btn-outline-secondary border-white" onClick={() => setShowPassword(!showPassword)}>
                                <img src={ showPassword
                                        ? "https://cdn-icons-png.flaticon.com/128/565/565655.png" 
                                        : "https://cdn-icons-png.flaticon.com/128/2874/2874780.png" 
                                    }
                                alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                style={{ width: "20px", height: "20px" }}/>
                            </button>
                        </div>

                            <button type="submit" className="btn btn-primary w-100 mb-4"> Registrarse </button>
                        </form>

                </div>
            </div>
        </div>
    </>
    );
};

export default Register;