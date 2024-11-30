import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ferre from "../assets/ferre.png";
import Letras from "../assets/img/nombre.png";
import Lupa from "../assets/img/buscar.png";
import apiConnect from "../utils/api.connection";
const blue = "#282C37";
const orange = "#F75409";

const SinginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const signin = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password };

      const result = await apiConnect.post("api/auth/", formData);

      localStorage.setItem("token", result.token);
      localStorage.setItem("role", result.role);
      localStorage.setItem("id", result.id);

      switch (result.role) {
        case "Cliente":
          window.location.href = "/tools";
          break;
        case "Empleado":
          window.location.href = "/orders";
          break;
        case "Administrador":
          window.location.href = "/profile";
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Barra de Navegación */}
      <nav className="navbar navbar-expand-lg p-0 ">
        <div style={{ backgroundColor: "#282c37" }} className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <img src={Letras} style={{ width: 250, height: 50 }} alt="Logo" />
          </a>
          <div className="collapse navbar-collapse p-4">
            <a className="nav-link text-white fs-4" href="/">
              Catálogo
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white">
                <input
                  style={{ width: 450 }}
                  className="bg-transparent border-0 rounded-pill text-dark"
                  type="search"
                  placeholder="Buscar"
                />
                <img
                  src={Lupa}
                  style={{ width: 25, height: 27 }}
                  className="me-2"
                  alt="Lupa"
                />
              </div>
            </ul>
            <button
              className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#f75409",
                fontSize: 20,
                width: 150,
                height: 35,
              }}
              onClick={() => (window.location.href = "/")}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Espaciado debajo de la navbar */}
      <div style={{ marginTop: "8px" }}>
        <div className="d-flex justify-content-center align-items-center pt-5">
          {/* Contenedor de login */}
          <div
            className="border-0 shadow-lg rounded-lg d-flex flex-column flex-md-row w-75"
            style={{ minHeight: "70vh" }}
          >
            <div
              className="bg-secondary-subtle border-0 d-flex justify-content-center align-items-center w-100 w-md-50"
              style={{ minHeight: "20rem" }}
            >
              <img
                src={ferre}
                alt="ferre"
                className="img-fluid"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>

            {/* Formulario */}
            <div className="d-flex flex-column justify-content-center align-items-center p-4 bg-white w-100 w-md-50">
              <p className="fw-medium fs-1 mb-4">¡Bienvenido!</p>
              <form onSubmit={signin} className="w-75">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Usuario"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="username">Usuario</label>
                </div>

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

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showPassword"
                    onChange={togglePasswordVisibility}
                  />
                  <label className="form-check-label" htmlFor="showPassword">
                    {" "}
                    Mostrar Contraseña{" "}
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-4"
                  id="btn_login"
                >
                  Iniciar Sesión
                </button>
              </form>

              <div className="text-center">
                <p className="fw-bold mb-0 text-danger">
                  {" "}
                  ¿Aún no tienes cuenta?{" "}
                </p>
                <p className="mb-0">
                  {" "}
                  Regístrate gratis para conocer los lanzamientos y ofertas que
                  tenemos para ti.
                </p>
                <button
                  className="btn fw-bold fs-5"
                  style={{ color: orange }}
                  onClick={() => (window.location.href = "/register")}
                >
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
