import React, { useState, useEffect } from "react";
import Navbar from "../admin/NavBar.jsx";
import EmployeeDetails from "./EmployeeDetails.jsx";
import apiConnect from "../../utils/api.connection.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Employees = () => {
  const blue = "#282C37";
  const bluee = "#04478D";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [lastnames, setLastnames] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [telephone, setTelephone] = useState("");
  const [direction, setDirection] = useState("");
  const [occupations, setOccupations] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getAllOccupations();
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    try {
      const response = await apiConnect.get("api/admin/getAllEmployees");
      const list = response.filter((user) => user.Role.role === "Empleado");
      setEmployees(list);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    }
  };

  const getAllOccupations = async () => {
    try {
      const response = await apiConnect.get("api/occupation/");
      setOccupations(response.occupations);
    } catch (error) {
      console.error("Error al obtener ocupaciones:", error);
    }
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const [lastname, surname] = lastnames.split(" ");
      const [street, city, state, postal] = direction.split(", ");
      const role = 2; // Rol 2 es para "Empleado"

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
        getAllEmployees(); // Refresca la lista de empleados
        setShowModal(false);
        resetForm();
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setName("");
    setLastnames("");
    setEmail("");
    setBirthday("");
    setTelephone("");
    setDirection("");
    setOccupation("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-dark mx-auto text-center mb-4">Empleados</h2>

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
            className="text-white btn rounded-pill"
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
                  <td>{employee.name}</td>
                  <td>
                    {employee.lastname} {employee.surname}
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.telephone}</td>
                  <td>{employee.active ? "Activo" : "Inactivo"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
        <EmployeeDetails
          selectedEmployee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
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
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastnames}
                      onChange={(e) => setLastnames(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      className="form-control"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      value={direction}
                      onChange={(e) => setDirection(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Ocupación</label>
                    <select
                      className="form-select"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    >
                      <option value="">Selecciona una ocupación</option>
                      {occupations && occupations.length > 0 ? (
                        occupations.map((occ) => (
                          <option key={occ.idOccupation} value={occ.idOccupation}>
                            {occ.occupation} {/* Aquí puedes cambiar 'name' por el campo que sea adecuado */}
                          </option>
                        ))
                      ) : (
                        <option value="">No hay ocupaciones disponibles</option>
                      )}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="form-check mt-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      <label className="form-check-label">Mostrar Contraseña</label>
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
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Employees;
