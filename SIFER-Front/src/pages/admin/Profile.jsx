import "bootstrap/dist/css/bootstrap.min.css";
import Perfil from "../../assets/img/perfil.png";
import Employees from "../../assets/img/employees.png";
import Historial from "../../assets/img/historial.png";
import Inventario from "../../assets/img/inven.png";
import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import apiConnect from "../../utils/api.connection";

const blue = "#282C37";
const orange = "#F75409";
const lightGray = "#D9D9D9";

export const Profile = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [user, setUser] = useState({});
  const [change, setChange] = useState("");

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const id = localStorage.getItem("id");

      const response = await apiConnect.get(`api/admin/getEmployee/${id}`);

      setUser(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg p-0 ">
        <div style={{ backgroundColor: blue }} class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img src={Logo} style={{ width: 100, height: 70 }} />
          </a>

          <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="bg-white rounded-pill border border-dark-subtle d-flex position-absolute start-50 translate-middle">
                <a
                  class="nav-link active px-5"
                  aria-current="page"
                  href="#"
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
                      filter: hovered1 ? "brightness(1.2)" : "brightness(1)",
                    }}
                    alt="usuarios"
                  />
                </a>

                <a
                  class="nav-link active px-5"
                  aria-current="page"
                  href="#"
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
                      filter: hovered2 ? "brightness(1.2)" : "brightness(1)",
                    }}
                    alt="usuarios"
                  />
                </a>

                <a
                  class="nav-link active px-5"
                  aria-current="page"
                  href="#"
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
                      filter: hovered3 ? "brightness(1.2)" : "brightness(1)",
                    }}
                    alt="usuarios"
                  />
                </a>

                <a
                  class="nav-link active px-5"
                  aria-current="page"
                  href="/stock"
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
                      filter: hovered4 ? "brightness(1.2)" : "brightness(1)",
                    }}
                    alt="usuarios"
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
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                localStorage.removeItem("id");
                window.location.href = "/";
              }}
            >
              {" "}
              Salir{" "}
            </button>
          </div>
        </div>
      </nav>
      {/* Fin Navbar*/}

      <div className="container mt-5">
        {/* Información de Usuario */}
        <div className="mb-4">
          <h5 className="fw-bold">Información de Usuario</h5>
          <hr />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                value={user?.name + " " + user?.lastname + " " + user?.surname}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Correo:</label>
              <input
                type="text"
                value={user?.email}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Fecha de nacimiento:</label>
              <input
                type="text"
                value={user?.birthday}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Rol:</label>
              <input
                type="text"
                value={user.Role?.role}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
          </div>
          <button
            className="btn text-white mt-3"
            style={{
              backgroundColor: blue,
              borderRadius: "10px",
              fontWeight: "500",
            }}
          >
            Cambiar contraseña
          </button>
        </div>

        {/* Información de Contacto */}
        <div className="mb-4">
          <h5 className="fw-bold">Información de contacto</h5>
          <hr />
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Dirección:</label>
              <input
                type="text"
                value={
                  user.Address?.street +
                  " " +
                  user.Address?.city +
                  " " +
                  user.Address?.state +
                  " " +
                  user.Address?.postal_code
                }
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Número de teléfono:</label>
              <input
                type="text"
                value={user?.telephone}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;