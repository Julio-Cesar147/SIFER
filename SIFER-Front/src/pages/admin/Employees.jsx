import Navbar from "../admin/NavBar.jsx";
import React, { useState, useEffect } from "react";
const blue = "#282C37";
const orange = "#F75409";
const bluee = "#04478D";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeDetails from "./EmployeeDetails.jsx";
import apiConnect from "../../utils/api.connection.js";

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({});

  const [name, setName] = useState("");
  const [lastnames, setLastnames] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [telephone, setTelephone] = useState("");
  const [direction, setDirection] = useState("");
  const [occupations, setOccupations] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getAllOccupations();
    getAllEmployees();
  }, []);

  /*const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };*/

  const handleAddEmployee = async (e) => {
    //setEmployees([...employees, newEmployee]);
    //setNewEmployee();
    //

    e.preventDefault();

    try {
      const lastname = lastnames.split(" ")[0];
      const surname = lastnames.split(" ")[1];
      const street = direction.split(",")[0];
      const city = direction.split(",")[1];
      const state = direction.split(",")[2];
      const postal = direction.split(",")[3];
      const role = 2;

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
        console.log("Registro exitoso");

        window.location.reload();

        setName("");
        setLastnames("");
        setEmail("");
        setBirthday("");
        setTelephone("");
        setDirection("");
        setOccupation("");
        setPassword("");

        setShowModal(false);
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error(error);
    }

    setShowModal(false);
  };

  const handleSaveEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp === selectedEmployee ? updatedEmployee : emp))
    );
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = (employeeToDelete) => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.email !== employeeToDelete.email)
    );
    setSelectedEmployee(null);
  };

  const getAllEmployees = async () => {
    try {
      const response = await apiConnect.get("api/admin/getAllEmployees");
      console.log(response);
      const list = response.filter((user) => user.Role.role === "Empleado");

      setEmployees(list);
    } catch (error) {
      console.error(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const getAllOccupations = async () => {
    try {
      const response = await apiConnect.get("api/occupation/");

      setOccupations(response.occupations);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2 className="text-dark mx-auto text-center mb-4">Empleados</h2>

        {/* Buscador */}
        <div className="pt-5 input-group w-75 align-items-center justify-content-center start-50 translate-middle">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Buscar empleado"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search"></i>
          </span>

          <button
            className="text-white btn rounded-pill text-center d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: bluee,
              fontSize: 20,
              width: 100,
              height: 35,
            }}
            onClick={() => setShowModal(true)}
          >
            Agregar
          </button>
        </div>

        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">Nombre(s)</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo Electrónico</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) =>
                `${employee.name} ${employee.lastname} ${employee.surname}`
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((employee) => (
                <tr
                  key={employee.idUser}
                  onClick={() => setSelectedEmployee(employee)}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  {/* Asegúrate de que `id` sea único */}
                  <td>{employee.name}</td>
                  <td>
                    {employee.lastname} {employee.surname}
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.telephone}</td>
                  <td>{employee.active ? "Activo" : "Inactivo"}</td>{" "}
                  {/* Cambia según el estado */}
                </tr>
              ))}
          </tbody>
        </table>

        {selectedEmployee && (
          <EmployeeDetails
            selectedEmployee={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
            onSave={handleSaveEmployee}
            onDelete={handleDeleteEmployee}
          />
        )}

        {showModal && (
          <div
            className="modal fade show d-block"
            style={{ marginTop: 30 }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Agregar Empleado</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body ">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Apellidos</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        value={lastnames}
                        onChange={(e) => setLastnames(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        pattern="[0-9]{10}"
                        title="Debe ser un número de 10 dígitos" // aqui puse un  mensajito pa recordar que solo son 10 numeritos
                        maxLength="10" // esto hace que solo sean 10 digitos jiji
                        required
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          ); // Elimina letras y caracteres
                        }}
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ocupacion</label>
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
                    <div className="mb-3">
                      <label className="form-label">Fecha de Nacimiento</label>
                      <input
                        type="date"
                        className="form-control"
                        name="direction"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Dirección</label>
                      <input
                        type="direccion"
                        className="form-control"
                        name="direccion"
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <div className="d-flex">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary border-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <img
                            src={
                              showPassword
                                ? "https://cdn-icons-png.flaticon.com/128/565/565655.png"
                                : "https://cdn-icons-png.flaticon.com/128/2874/2874780.png"
                            }
                            alt={
                              showPassword
                                ? "Ocultar contraseña"
                                : "Mostrar contraseña"
                            }
                            style={{ width: "20px", height: "20px" }}
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ backgroundColor: bluee }}
                    onClick={handleAddEmployee}
                  >
                    {" "}
                    Guardar{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Employees;
