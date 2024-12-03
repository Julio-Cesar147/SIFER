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
          <div className="bg-white rounded-pill border border-dark-subtle d-flex justify-content-center">
            {["profile", "employees", "history", "stock"].map((link, idx) => (
              <Link
                key={link}
                className="nav-link active px-5"
                to={`/${link}`}
                onMouseEnter={() => handleHover(idx, true)}
                onMouseLeave={() => handleHover(idx, false)}
                style={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
              >
                <img
                  src={
                    idx === 0
                      ? Perfil
                      : idx === 1
                      ? Employees
                      : idx === 2
                      ? Historial
                      : Inventario
                  }
                  alt={link}
                  style={{
                    width: 41,
                    height: 41,
                    transform: hovered[idx] ? "scale(1.1)" : "scale(1)",
                    filter: hovered[idx] ? "brightness(1.2)" : "brightness(1)",
                  }}
                />
              </Link>
            ))}
          </div>
        );
      case "Empleado":
        return (
          <div className="bg-white rounded-pill border border-dark-subtle d-flex justify-content-center">
            {["profile", "sales", "orders"].map((link, idx) => (
              <Link
                key={link}
                className="nav-link active px-5"
                to={`/${link}`}
                onMouseEnter={() => handleHover(idx, true)}
                onMouseLeave={() => handleHover(idx, false)}
                style={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
              >
                <img
                  src={idx === 0 ? Perfil : idx === 1 ? Venta : Inventario}
                  alt={link}
                  style={{
                    width: 41,
                    height: 41,
                    transform: hovered[idx] ? "scale(1.1)" : "scale(1)",
                    filter: hovered[idx] ? "brightness(1.2)" : "brightness(1)",
                  }}
                />
              </Link>
            ))}
          </div>
        );
      case "Cliente":
        return (
          <>
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
          </>
        );
        default: // No logueado
        return (
          <>
            <a className="nav-link text-white fs-4" href="/">
              Catálogo
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="d-flex position-absolute end-0 translate-middle me-3 rounded-pill border border-dark-subtle bg-white mt-3">
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
          </>
        );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg p-0">
  <div style={{ backgroundColor: blue }} className="container-fluid">
    <a className="navbar-brand text-white" href="/">
      <img src={Letras} style={{ width: 250, height: 50 }} alt="Logo" />
    </a>
    <div className="collapse navbar-collapse d-flex justify-content-center w-100">
      <div className="d-flex justify-content-center w-100">
        {renderNavForRole()}
      </div>
      {/* El botón de "Salir" debe seguir estando a la derecha */}
      <button
        className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: orange,
          fontSize: 15,
          width: 150,
          height: 35,
        }}
        onClick={role ? handleLogout : () => navigate("/login")}
      >
        {role ? "Salir" : "Iniciar Sesión"}
      </button>
    </div>
  </div>
</nav>

  );
};

export default NavBar;
