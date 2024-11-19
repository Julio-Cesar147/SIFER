import React, { useState } from 'react';
import ferre from '../assets/ferre.png';
import '../assets/css/LoginForm.css'

const LoginForm = () => {
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

    return (
        <div className="login-card">
            <div id="left">
                <img src={ferre} style={{ width: '50%' }} alt="ferre" />
            </div>
            <div id="right">
                <form id="loginForm" className="form-floating mb-3 input-container" onSubmit={handleSubmit}>
                    <div className="contenido">
                        <h1>¡Bienvenido!</h1>
                        <p>Inicia sesión</p>
                        <div className="input-field">
                            <input
                                required
                                autoComplete="off"
                                type="text"
                                name="usuario"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="username">Usuario</label>
                        </div>
                        <div className="input-field">
                            <input
                                required
                                autoComplete="off"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                    </div>
                    <button type="submit" id="btn_login">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
