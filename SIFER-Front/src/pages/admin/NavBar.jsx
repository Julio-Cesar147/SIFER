import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Letras from "../../assets/img/nombre.png";
import Perfil from "../../assets/img/perfil.png";
import Employees from "../../assets/img/employees.png";
import Historial from "../../assets/img/historial.png";
import Inventario from "../../assets/img/inven.png";
import Venta from "../../assets/img/venta.png"; // Empleado
import Lupa from "../../assets/img/buscar.png";
import OrderP from "../../assets/img/inven.png";
import Logo from "../../assets/img/logo.png";
const bluee = "#04478D";
const blue = "#282C37";
const orange = "#F75409";

const NavBar = () => {
  const [role, setRole] = useState("");
  const [hovered, setHovered] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "");
  }, []);

  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setRole(""); // Reset role after logout
    navigate("/"); // Redirige a la página principal o login
  };

  const handleHover = (id, isHovering) => {
    setHovered((prev) => ({ ...prev, [id]: isHovering }));
  };

  const renderNavForRole = () => {
    switch (role) {
      case "Administrador":
        return (
          <nav className="navbar navbar-expand-lg p-0">
            <div style={{ backgroundColor: blue }} className="container-fluid">
              {/* Opciones del administrador */}
            </div>
          </nav>
        );
      case "Empleado":
        return (
          <nav className="navbar navbar-expand-lg p-0">
            <div style={{ backgroundColor: blue }} className="container-fluid">
              {/* Opciones del empleado */}
            </div>
          </nav>
        );
      case "Cliente":
        return (
          <nav className="navbar navbar-expand-lg p-0">
            <div style={{ backgroundColor: blue }} className="container-fluid">
              <a className="navbar-brand text-white" href="/">
                <img src={Letras} style={{ width: 250, height: 50 }} alt="Logo" />
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
                <a className="nav-link text-white fs-5 me-5" href="/">
                  Catálogo
                </a>
                <a className="nav-link text-white fs-5 me-5" href="/cart">
                  Apartados
                </a>
                <button
                  className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: orange,
                    fontSize: 20,
                    width: 150,
                    height: 35,
                  }}
                  onClick={handleLogout}
                >
                  Salir
                </button>
              </div>
            </div>
          </nav>
        );
      default:
        return (
          <nav className="navbar navbar-expand-lg p-0">
            <div style={{ backgroundColor: blue }} className="container-fluid">
              <a className="navbar-brand text-white" href="/">
                <img src={Letras} style={{ width: 250, height: 50 }} alt="Logo" />
              </a>
              <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
                <a className="nav-link text-white fs-4" href="/">
                  Catálogo
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
                <button
                  className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: orange,
                    fontSize: 17,
                    width: 190,
                    height: 35,
                  }}
                  onClick={() => navigate("/login")}
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </nav>
        );
    }
  };

  return <>{renderNavForRole()}</>;
};

export default NavBar;
