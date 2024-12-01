import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/img/logo.png";
import Perfil from "../../assets/img/perfil.png";
import Employees from "../../assets/img/employees.png";
import Historial from "../../assets/img/historial.png";
import Inventario from "../../assets/img/inven.png";

const blue = "#282C37";
const orange = "#F75409";

const Navbar = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [role, setRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    setHasToken(!!token);
    setRole(storedRole || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/"); // Redirigir al inicio
  };

  const handleLogin = () => {
    navigate("/login"); // Redirigir al login
  };

  const renderMenu = () => {
    if (!hasToken) {
      return (
        <>
          <a className="nav-link text-white fs-4" href="/">
            Herramientas
          </a>
          <ul className="navbar-nav me-5 w-100">
            <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100 ms-5">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </ul>
        </>
      );
    } else {
      return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="bg-white rounded-pill border border-dark-subtle d-flex position-absolute start-50 translate-middle">
            {/* Perfil */}
            <Link
              className="nav-link active px-5"
              to="/profile"
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              style={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
            >
              <img
                src={Perfil}
                style={{
                  width: 41,
                  height: 41,
                  transform: hovered1 ? "scale(1.1)" : "scale(1)",
                  filter: hovered1 ? "brightness(1.2)" : "brightness(1)",
                }}
                alt="perfil"
              />
            </Link>

            {/* Employees (solo para Administrador y Empleado) */}
            {(role === "Administrador" || role === "Empleado") && (
              <Link
                className="nav-link active px-5"
                to="/employees"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                style={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
              >
                <img
                  src={Employees}
                  style={{
                    width: 41,
                    height: 41,
                    transform: hovered2 ? "scale(1.1)" : "scale(1)",
                    filter: hovered2 ? "brightness(1.2)" : "brightness(1)",
                  }}
                  alt="employees"
                />
              </Link>
            )}

            {/* Historial (solo para Administrador y Empleado) */}
            {(role === "Administrador" || role === "Empleado") && (
              <Link
                className="nav-link active px-5"
                to="/history"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
                style={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
              >
                <img
                  src={Historial}
                  style={{
                    width: 41,
                    height: 41,
                    transform: hovered3 ? "scale(1.1)" : "scale(1)",
                    filter: hovered3 ? "brightness(1.2)" : "brightness(1)",
                  }}
                  alt="historial"
                />
              </Link>
            )}

            {/* Inventario (solo para Administrador) */}
            {role === "Administrador" && (
              <Link
                className="nav-link active px-5"
                to="/stock"
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
                style={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
              >
                <img
                  src={Inventario}
                  style={{
                    width: 41,
                    height: 41,
                    transform: hovered4 ? "scale(1.1)" : "scale(1)",
                    filter: hovered4 ? "brightness(1.2)" : "brightness(1)",
                  }}
                  alt="inventario"
                />
              </Link>
            )}
          </div>
        </ul>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div style={{ backgroundColor: blue }} className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img src={Logo} style={{ width: 100, height: 70 }} alt="Logo" />
        </Link>

        <div
          className="collapse navbar-collapse p-4"
          id="navbarSupportedContent"
        >
          {renderMenu()}
          <button
            className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: orange,
              fontSize: 20,
              width: 150,
              height: 35,
            }}
            onClick={hasToken ? handleLogout : handleLogin}
          >
            {hasToken ? "Salir" : "Iniciar Sesión"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
