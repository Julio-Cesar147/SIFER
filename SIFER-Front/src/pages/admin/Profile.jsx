import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "./NavBar";
import apiConnect from "../../utils/api.connection";

const blue = "#282C37";
const lightGray = "#D9D9D9";
const pink = "#ff0080";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const [change, setChange] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleChangePass = async () => {
    if (change !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden",
        icon: "warning",
        showConfirmButton: false,
          timer: 900,
      })
      return;
    }

    if (!change) {
      Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "La nueva contraseña no puede estar vacía.",
        showConfirmButton: true,
      });
      return;
    }

    try {
      const id = localStorage.getItem("id");
      const payload = { password: change };
      await apiConnect.patch(`api/auth/${id}`, payload);

      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Contraseña cambiada exitosamente.",
        showConfirmButton: false,
        timer: 1500,
      });

      setShowModal(false); // Cierra el modal
      setChange(""); // Limpia el estado de la contraseña
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al cambiar la contraseña.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{color:pink}}>
        {/* Información de Usuario */}
        <div className="mb-4" style={{color:pink}}>
          <h5 className="fw-bold">Información de Usuario</h5>
          <hr />
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                value={`${user?.name || ""} ${user?.lastname || ""} ${
                  user?.surname || ""
                }`}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Correo:</label>
              <input
                type="text"
                value={user?.email || ""}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Fecha de nacimiento:</label>
              <input
                type="text"
                value={user?.birthday || ""}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Rol:</label>
              <input
                type="text"
                value={user?.Role?.role || ""}
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
            onClick={() => setShowModal(true)}
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
                value={`${user.Address?.street || ""}, ${
                  user.Address?.city || ""
                }, ${user.Address?.state || ""}, ${
                  user.Address?.postal_code || ""
                }`}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Número de teléfono:</label>
              <input
                type="text"
                value={user?.telephone || ""}
                readOnly
                className="form-control"
                style={{ backgroundColor: lightGray, border: "none" }}
              />
               <button
            className="btn text-white mt-3"
            style={{
              backgroundColor: blue,
              borderRadius: "10px",
              fontWeight: "500",
            }}
          >otro boton
            
          </button>
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
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nueva contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={change}
                    onChange={(e) => setChange(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                      <label className="form-label">Confirmar Contraseña</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
              </div>
              
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleChangePass}
                >
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
