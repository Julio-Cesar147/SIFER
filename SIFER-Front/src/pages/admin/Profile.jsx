import "bootstrap/dist/css/bootstrap.min.css";
import Perfil from "../../assets/img/perfil.png";
import Employees from "../../assets/img/employees.png";
import Historial from "../../assets/img/historial.png";
import Inventario from "../../assets/img/inven.png";
import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import Navbar from "./NavBar";
import apiConnect from "../../utils/api.connection";

const blue = "#282C37";
const orange = "#F75409";
const lightGray = "#D9D9D9";

export const Profile = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [showModal, setShowModal] = useState(false); // Controla la visibilidad del modal

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
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
    
      <Navbar/>

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
            onClick={handleOpenModal} // Abre el modal al hacer clic
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

      {/* Modal de cambio de contraseña */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cambiar contraseña</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Contraseña actual:</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nueva contraseña:</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirmar nueva contraseña:</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
