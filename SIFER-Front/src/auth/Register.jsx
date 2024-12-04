import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import Letras from "../assets/img/nombre.png";
import Lupa from "../assets/img/buscar.png";
import Swal from "sweetalert2";
import { Button, FloatingLabel, Label } from "flowbite-react";
import apiConnect from "../utils/api.connection";
const blue = "#282C37";
const orange = "#F75409";

const Register = () => {
  const [name, setName] = useState("");
  const [lastnames, setLastnames] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [telephone, setTelephone] = useState("");
  const [occupations, setOccupations] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getAllOccupations();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const lastname = lastnames.split(" ")[0];
      const surname = lastnames.split(" ")[1];
      const role = 3;

      const payload = {
        name,
        lastname,
        surname,
        email,
        password,
        telephone,
        birthday,
        role,
        occupation,
        street,
        city,
        state,
        postal,
      };

      const result = await apiConnect.post("api/auth/register", payload);

      if (result) {
        Swal.fire({
          title: "Registro exitoso",
          text: "¡Bienvenido a SIFER!",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });

        setTimeout(() => {
          window.location.href = "/login"; // Redirigir al inicio de sesión
        }, 2500);
      } else {
        Swal.fire({
          title: "Error",
          text: "Error en el registro, por favor intenta nuevamente.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Usuario no registrado. Por favor verifica tus datos o intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      console.error(error);
    }
    // Funcionalidad de autenticación
  };

  const getAllOccupations = async () => {
    try {
      const response = await apiConnect.get("api/occupation/");

      setOccupations(response.occupations);
    } catch (error) {
      console.error(error);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <nav class="navbar navbar-expand-lg p-0 ">
        <div style={{ backgroundColor: blue }} class="container-fluid">
          <a class="navbar-brand text-white" href="/">
            <img src={Letras} style={{ width: 250, height: 50 }} />
          </a>

          <div class="collapse navbar-collapse p-4" id="navbarSupportedContent">
            <a class="nav-link text-white fs-4" href="/">
              {" "}
              Herramientas{" "}
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

      <div className="d-flex justify-content-center align-items-center pt-4">
        <div className="border-0 shadow rounded-lg d-flex w-75">
          <div
            className="bg-secondary-subtle border-0 d-flex justify-content-center align-items-center"
            style={{ width: "50%", height: "auto" }}
          >
            <img src={Logo} alt="Logo" className="w-100 h-auto " />
          </div>

          <div
            className="d-flex flex-column justify-content-center align-items-center p-4"
            style={{ width: "50%" }}
          >
            <p className="fw-medium fs-4 mb-4">Registrarse</p>
            <form className="w-75" onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label
                  htmlFor="username"
                  className="form-label fw-bold text-primary"
                >
                  Nombre:
                </Label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Usuario"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="lastnames"
                  className="form-label fw-bold text-primary"
                >
                  Apellidos:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastnames"
                  name="lastnames"
                  placeholder="Apellidos"
                  required
                  value={lastnames}
                  onChange={(e) => setLastnames(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-bold text-primary"
                >
                  Correo Electrónico:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <label
                htmlFor="email"
                className="form-label fw-bold text-primary"
              >
                Contraseña:
              </label>
              <div className="mb-3 d-flex">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary border-white "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={
                      showPassword
                        ? "https://cdn-icons-png.flaticon.com/128/565/565655.png"
                        : "https://cdn-icons-png.flaticon.com/128/2874/2874780.png"
                    }
                    alt={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                    style={{ width: "20px", height: "20px" }}
                  />
                </button>
              </div>

              <div className="d-flex mb-3">
                <div className="col-6">
                  <label
                    htmlFor="date"
                    className="form-label fw-bold text-primary"
                  >
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    name="date"
                    placeholder="MM/DD/AAAA"
                    required
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className="col-6 ms-2">
                  <label
                    htmlFor="phone"
                    className="form-label fw-bold text-primary"
                  >
                    Teléfono:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Número telefonico"
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="lastnames"
                  className="form-label fw-bold text-primary"
                >
                  Ocupacion:
                </label>
                <select
                  className="form-control"
                  id="occupation"
                  name="occupation"
                  required
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <option value="" disabled>
                    Selecciona una ocupación
                  </option>
                  {occupations.map((occupation) => (
                    <option
                      key={occupation.idOccupation}
                      value={occupation.idOccupation}
                    >
                      {occupation.occupation}
                    </option>
                  ))}
                </select>
              </div>

              <div className="d-flex mb-3">
                <div className="col-6">
                  <label
                    htmlFor="street"
                    className="form-label fw-bold text-primary"
                  >
                    Direccion:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    placeholder="Direccion"
                    required
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
                <div className="col-6 ms-2">
                  <label
                    htmlFor="city"
                    className="form-label fw-bold text-primary"
                  >
                    Ciudad:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex mb-3">
                <div className="col-6">
                  <label
                    htmlFor="state"
                    className="form-label fw-bold text-primary"
                  >
                    Estado:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    placeholder="Estado"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="col-6 ms-2">
                  <label
                    htmlFor="postal"
                    className="form-label fw-bold text-primary"
                  >
                    Codigo Postal:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postal"
                    name="postal"
                    placeholder="Codigo Postal"
                    required
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </div>
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