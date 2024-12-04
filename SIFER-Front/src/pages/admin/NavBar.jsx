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

  const handleStorage = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = '/login'; 
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
          <a className="navbar-brand text-white" href="/">
                <img src={Letras} style={{ width: 250, height: 50 }} alt="Logo" />
              </a>
            <div
              className="collapse navbar-collapse p-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="bg-white rounded-pill border border-dark-subtle d-flex position-absolute start-50 translate-middle">
                  <a
                    className="nav-link active px-5"
                    href="/profile"
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                    style={{
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  >
                    <img
                      src={Perfil}
                      style={{
                        width: 41,
                        height: 41,
                        transform: hovered1 ? "scale(1.1)" : "scale(1)",
                        filter: hovered1
                          ? "brightness(1.2)"
                          : "brightness(1)",
                      }}
                      alt="perfil"
                    />
                  </a>

                  <a
                    className="nav-link active px-5"
                    href="/employees"
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    style={{
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  >
                    <img
                      src={Employees}
                      style={{
                        width: 41,
                        height: 41,
                        transform: hovered2 ? "scale(1.1)" : "scale(1)",
                        filter: hovered2
                          ? "brightness(1.2)"
                          : "brightness(1)",
                      }}
                      alt="employees"
                    />
                  </a>

                  <a
                    className="nav-link active px-5"
                    href="/history"
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                    style={{
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  >
                    <img
                      src={Historial}
                      style={{
                        width: 41,
                        height: 41,
                        transform: hovered3 ? "scale(1.1)" : "scale(1)",
                        filter: hovered3
                          ? "brightness(1.2)"
                          : "brightness(1)",
                      }}
                      alt="historial"
                    />
                  </a>

                  <a
                    className="nav-link active px-5"
                    href="/Stock"
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                    style={{
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  >
                    <img
                      src={Inventario}
                      style={{
                        width: 41,
                        height: 41,
                        transform: hovered4 ? "scale(1.1)" : "scale(1)",
                        filter: hovered4
                          ? "brightness(1.2)"
                          : "brightness(1)",
                      }}
                      alt="inventario"
                    />
                  </a>
                </div>
              </ul>
              <button
                className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: orange,
                  fontSize: 20,
                  width: 100,
                  height: 35,
                }}
                onClick={handleStorage}
              >
                Salir
              </button>
            </div>
          </div>
        </nav>
          );
      case "Empleado":
        return (
          <nav className="navbar navbar-expand-lg p-0">
            <div style={{ backgroundColor: blue }} className="container-fluid">
                <a className="navbar-brand text-white" href="/login">
                    <img src={Logo} style={{ width: 100, height: 70 }} alt="Logo" />
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
                        {/* Contenedor centrado con Flexbox */}
                        <div className="bg-white rounded-pill border border-dark-subtle d-flex">
                            <a className="nav-link active px-5" href="/profile"
                                onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)}
                                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}>
                                <img src={Perfil} style={{ width: 41, height: 41, transform: hovered1 ? 'scale(1.1)' : 'scale(1)', filter: hovered1 ? 'brightness(1.2)' : 'brightness(1)' }} alt="perfil" />
                            </a>

                            <a className="nav-link active px-5" href="/sales"
                                onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)}
                                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}>
                                <img src={Venta} style={{ width: 41, height: 41, transform: hovered2 ? 'scale(1.1)' : 'scale(1)', filter: hovered2 ? 'brightness(1.2)' : 'brightness(1)' }} alt="ventas" />
                            </a>

                            <a className="nav-link active px-5" href="History"
                                onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)}
                                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}>
                                <img src={Inventario} style={{ width: 41, height: 41, transform: hovered3 ? 'scale(1.1)' : 'scale(1)', filter: hovered3 ? 'brightness(1.2)' : 'brightness(1)' }} alt="inventario" />
                            </a>
                        </div>
                    </ul>

                    <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center" style={{ backgroundColor: orange, fontSize: 20, width: 100, height: 35 }}
                    onClick={handleStorage}> Salir </button>
                </div>
            </div>
        </nav>
        );
      case "Cliente":
        return (
          <nav className="navbar navbar-expand-lg p-0 position-fixed w-100" style={{ top: 0, left: 0, zIndex: 1030 }}>
            <div style={{ backgroundColor: blue }} className="container-fluid">
                <a className="navbar-brand text-white" href="/">
                    <img src={Letras} style={{ width: 250, height: 50 }} />
                </a>
                <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
                    <ul className="navbar-nav me-5 w-50 ms-5">
                        <div className="input-group bg-transparent border-0 rounded-pill text-dark w-100">
                            <input type="text" className="form-control rounded-pill" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                    </ul>
                    <a className="nav-link text-white fs-5 me-5" href="/"> Herramientas </a>
                    <a className="nav-link text-white fs-5 me-5" href="/cart">Apartados</a>
                    <button className="btn rounded-pill text-center fw-medium d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: orange, fontSize: 20, width: 150, height: 35 }} onClick={handleStorage} >
                        Salir
                    </button>
                </div>
            </div>
        </nav>
        );
      default:
        return (
          <nav
              className="navbar navbar-expand-lg p-0 position-fixed w-100"
              style={{ top: 0, left: 0, zIndex: 1030 }}
            >
              <div
                style={{ backgroundColor: blue }}
                className="container-fluid"
              >
                <a className="navbar-brand text-white" href="/">
                  <img src={Letras} style={{ width: 250, height: 50 }} />
                </a>
                <div
                  class="collapse navbar-collapse p-4"
                  id="navbarSupportedContent"
                >
                  <a class="nav-link text-white fs-4" href="/">
                    {" "}
                    Catálogo{" "}
                  </a>

                  <ul class="navbar-nav me-5 w-100 ">
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
                    onClick={() => (window.location.href = "/login")}
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
