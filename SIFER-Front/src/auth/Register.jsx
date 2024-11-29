import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Logo from '../assets/img/logo.png';
import Letras from '../assets/img/nombre.png';
import Swal from 'sweetalert2';

const blue = "#282C37";
const orange = '#F75409';

const Register = () => {
    const [username, setUsername] = useState('');
    const [lastnames, setLastnames] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        if (!value.includes('@')) {
            setUsername(value);
        }
    };

    const handleLastnamesChange = (e) => {
        const value = e.target.value;
        if (!value.includes('@')) {
            setLastnames(value);
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setPhone(value);
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(value));
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (username && lastnames && phone && isEmailValid && phone.length === 10) {
            Swal.fire({
                title: 'Registro',
                text: 'Tus datos quedaron guardados exitosamente',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar',
            });
        } else {
            Swal.fire('Error', 'Por favor, completa correctamente todos los campos.', 'error');
        }
    };

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

            <div className="d-flex justify-content-center align-items-center pt-4">
                <div className="border-0 shadow rounded-lg d-flex w-75">
                    <div className="bg-secondary-subtle border-0 d-flex justify-content-center align-items-center" style={{ width: '50%', height: 'auto' }}>
                        <img src={Logo} alt="Logo" className="w-100 h-auto" />
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ width: '50%' }}>
                        <p className="fw-medium fs-4 mb-4">Registrarse</p>
                        <form className="w-75" onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label fw-bold text-primary">
                                    Nombre:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={handleNameChange}
                                    placeholder="Usuario"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastnames" className="form-label fw-bold text-primary">
                                    Apellidos:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastnames"
                                    value={lastnames}
                                    onChange={handleLastnamesChange}
                                    placeholder="Apellidos"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label fw-bold text-primary">
                                    Teléfono:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Número telefónico"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold text-primary"> Correo Electrónico: </label>
                                <input type="text" className={`form-control ${!isEmailValid ? 'border-danger' : ''}`}
                                    id="email" value={email} onChange={handleEmailChange} placeholder="Correo electrónico" required />
                                    {!isEmailValid && (
                                        <small className="text-danger">Por favor, ingresa un correo electrónico válido.</small>
                                    )}
                            </div>

                            <div className="d-flex mb-3">
                                <input type={showPassword ? 'text' : 'password'} className="form-control" value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    required
                                />
                                <button type="button" className="btn btn-outline-secondary border-white" onClick={togglePasswordVisibility}>
                                    <img
                                        src={
                                            showPassword
                                                ? 'https://cdn-icons-png.flaticon.com/128/565/565655.png'
                                                : 'https://cdn-icons-png.flaticon.com/128/2874/2874780.png'
                                        }
                                        alt={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                </button>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-4">
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
