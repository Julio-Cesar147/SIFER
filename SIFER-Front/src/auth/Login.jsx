import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ferre from "../assets/ferre.png";
import Navbar from "../pages/admin/NavBar";

const styles = {
  loginCard: {
    maxWidth: "900px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  buttonLogin: {
    backgroundColor: "#0044cc",
    border: "none",
    fontSize: "16px",
    padding: "12px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonLoginHover: {
    backgroundColor: "#003399",
  },
};

const SinginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Funcionalidad de autenticación
  };

  return (

    
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {/* Tarjeta de inicio de sesión */}
      <div className="card login-card shadow-lg border-0">
        <div className="row g-0">
          {/* Lado izquierdo con imagen */}
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#F75409" }}
          >
            <img
              src={ferre}
              className="img-fluid"
              alt="ferre"
              style={{ width: "80%" }}
            />
          </div>

          {/* Lado derecho con el formulario */}
          <div className="col-md-6 bg-white d-flex flex-column justify-content-center p-4">
            <form onSubmit={handleSubmit} className="w-100">
              <h1 className="text-center mb-4">¡Bienvenido!</h1>
              <p className="text-center">Inicia sesión</p>

              {/* Campo de usuario */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Usuario"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Usuario</label>
              </div>

              {/* Campo de contraseña */}
              <div className="form-floating mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
              </div>

              {/* Checkbox para mostrar/ocultar contraseña */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  onChange={togglePasswordVisibility}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  Mostrar Contraseña
                </label>
              </div>

              {/* Botón de inicio de sesión */}
              <button
                type="submit"
                className="btn btn-primary w-100"
                id="btn_login"
              >
                Iniciar Sesión
              </button>
              <div className="text-center mt-4">
                <p className="fw-bold mb-0 text-danger">
                  ¿Aún no tienes cuenta?
                </p>
                <p className="mb-0">
                  Regístrate gratis para conocer los lanzamientos y ofertas que
                  tenemos para ti.
                </p>
                <button
                  className="btn fw-bold fs-5"
                  style={{ color: "orange" }}
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinginPage;
