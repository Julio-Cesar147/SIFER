import "bootstrap/dist/css/bootstrap.min.css";
import Perfil from "../../assets/img/perfil.png";
import Employees from "../../assets/img/employees.png";
import Historial from "../../assets/img/historial.png";
import Inventario from "../../assets/img/inven.png";
import { useState } from "react";
import Logo from "../../assets/img/logo.png";

const blue = "#282C37";
const orange = "#F75409";

export const Profile = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

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
                  href="#"
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
            >
              {" "}
              Salir{" "}
            </button>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        {/* Cambiar Contraseña Section */}
        <button
          className="d-flex align-items-center mb-3"
          style={{
            width: 267,
            height: 39,
            position: "relative",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "12px 20px",
              background: "#04478D",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div></div>
          </div>
          <div
            style={{
              position: "absolute",
              left: 38,
              top: 7,
              color: "#FFFEFE",
              fontSize: 20,
              fontFamily: "Be Vietnam Pro",
              fontWeight: "400",
            }}
          >
            Cambiar contraseña
          </div>
        </button>

        {/* Información de Usuario */}
        <div
          className="mb-3"
          style={{
            color: "black",
            fontSize: 24,
            fontFamily: "Be Vietnam",
            fontWeight: "700",
          }}
        >
          Información de Usuario
        </div>

        <div style={{ width: "100%", height: 0, border: "1px solid black" }}></div>

        <div className="mb-3">
  <label
    style={{
      color: "black",
      fontSize: 16,
      fontFamily: "Be Vietnam Pro",
      fontWeight: "400",
    }}
  >
    Nombre:
  </label>
  <input
    type="text"
    value="luz elena garcia"
    readOnly
    style={{
      width: 249,
      height: 33,
      background: "#D9D9D9",
      borderRadius: 5,
      border: "none",
      padding: "5px 10px",
      fontSize: 16,
      fontFamily: "Be Vietnam",
      fontWeight: "400",
    }}
  />
</div>

<div className="mb-3">
  <label
    style={{
      color: "black",
      fontSize: 16,
      fontFamily: "Be Vietnam Pro",
      fontWeight: "400",
    }}
  >
    Rol:
  </label>
  <input
    type="text"
    value="Empleado"
    readOnly
    style={{
      width: 247,
      height: 33,
      background: "#D9D9D9",
      borderRadius: 5,
      border: "none",
      padding: "5px 10px",
      fontSize: 16,
      fontFamily: "Be Vietnam",
      fontWeight: "400",
    }}
  />
</div>

<div className="mb-3">
  <label
    style={{
      color: "black",
      fontSize: 16,
      fontFamily: "Be Vietnam Pro",
      fontWeight: "400",
    }}
  >
    Dirección:
  </label>
  <input
    type="text"
    value="av universidad 4 col. las flores, emiliano zapata"
    readOnly
    style={{
      width: 430,
      height: 33,
      background: "#D9D9D9",
      borderRadius: 5,
      border: "none",
      padding: "5px 10px",
      fontSize: 16,
      fontFamily: "Be Vietnam",
      fontWeight: "400",
    }}
  />
</div>

<div className="mb-3">
  <label
    style={{
      color: "black",
      fontSize: 16,
      fontFamily: "Be Vietnam Pro",
      fontWeight: "400",
    }}
  >
    Correo:
  </label>
  <input
    type="text"
    value="luz@gmail.com"
    readOnly
    style={{
      width: 249,
      height: 33,
      background: "#D9D9D9",
      borderRadius: 5,
      border: "none",
      padding: "5px 10px",
      fontSize: 16,
      fontFamily: "Be Vietnam",
      fontWeight: "400",
    }}
  />
</div>

<div className="mb-3">
  <label
    style={{
      color: "black",
      fontSize: 16,
      fontFamily: "Be Vietnam Pro",
      fontWeight: "400",
    }}
  >
    Fecha de nacimiento:
  </label>
  <input
    type="text"
    value="16/09/1994"
    readOnly
    style={{
      width: 243,
      height: 33,
      background: "#D9D9D9",
      borderRadius: 5,
      border: "none",
      padding: "5px 10px",
      fontSize: 16,
      fontFamily: "Be Vietnam",
      fontWeight: "400",
    }}
  />
</div>

<div className="mb-3">
  <label style={{
      color: "black",
      fontSize: 16,
      fontFamily: "Be Vietnam Pro",
      fontWeight: "400",}}
      > Número de teléfono: </label><input
    type="text"
    value="7772568741"
    readOnly
    style={{
      width: 249,
      height: 33,
      background: "#D9D9D9",
      borderRadius: 5,
      border: "none",
      padding: "5px 10px",
      fontSize: 16,
      fontFamily: "Be Vietnam",
      fontWeight: "400",
    }}
  />
</div>


        {/* Información de Contacto */}
        <div
          className="mb-3"
          style={{
            color: "black",
            fontSize: 24,
            fontFamily: "Be Vietnam",
            fontWeight: "700",
          }}
        >
          Información de contacto
        </div>
        <div style={{ width: "100%", height: 0, border: "1px solid black" }}></div>


      </div>
    </>
  );
};

export default Profile;
