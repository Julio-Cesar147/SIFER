import React, { useState, useEffect } from "react";
const blue = "#282C37";
const orange = "#F75409";
const bluee = "#04478D";
const red = "#DF0000";
import Swal from "sweetalert2";
import apiConnect from "../../utils/api.connection";

const EmployeeDetails = ({ selectedEmployee, onClose, onSave, onDelete }) => {
  const [editableEmployee, setEditableEmployee] = useState({
    ...selectedEmployee,
  });

  useEffect(() => {
    setEditableEmployee({ ...selectedEmployee });
  }, [selectedEmployee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "lastnames") {
      const [lastname, ...surnameParts] = value.split(" ");
      setEditableEmployee({
        ...editableEmployee,
        lastname: lastname || "",
        surname: surnameParts.join(" ") || "",
      });
    } else if (name === "direction") {
      const [street = "", city = "", state = "", postal_code = ""] = value.split(",");
      setEditableEmployee((prev) => ({
        ...prev,
        Address: {
          ...prev.Address,
          street: street.trim(),
          city: city.trim(),
          state: state.trim(),
          postal_code: postal_code.trim(),
        },
      }));
    }else {
      setEditableEmployee({ ...editableEmployee, [name]: value });
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
  
    try {
      const { name, lastname, surname, email, telephone, Address } =
        editableEmployee;
      const { street, city, state, postal_code } = Address;
  
      const payload = {
        name,
        lastname,
        surname,
        email,
        telephone,
        street,
        city,
        state,
        postal: postal_code,
      };
  
      // Confirmación personalizada antes de guardar
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
  
      const result = await swalWithBootstrapButtons.fire({
        title: "¿Guardar cambios?",
        text: "Estás a punto de guardar los cambios del usuario.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, guardar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      });
  
      if (result.isConfirmed) {
        // Si el usuario confirma, entonces guardamos los cambios
        await apiConnect.put(
          `api/admin/updateEmployee/${editableEmployee.idUser}`,
          payload
        );
  
        // Llamamos a la función onSave para actualizar el estado del componente padre
        onSave(editableEmployee);
  
        // Mostrar alerta de éxito después de guardar
        Swal.fire({
          title: "Guardado",
          text: "Los cambios han sido guardados correctamente.",
          icon: "success",
        });
      } else {
        // Alerta de cancelación si no confirma
        Swal.fire({
          title: "Cancelado",
          text: "No se guardaron los cambios.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      // Si hay un error en la ejecución, mostrar alerta de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un problema al guardar los cambios.",
      });
    }
  };
  

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: bluee,
      cancelButtonColor: red,
      confirmButtonText: "Eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteEmployee(); // Llamada para eliminar al empleado
          Swal.fire({
            icon: "success",
            title: "Empleado Eliminado",
            showConfirmButton: false,
            timer: 2500,
          });
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error al eliminar",
            text: "Hubo un error al intentar eliminar el empleado",
          });
        }
      }
    });
  };

  const deleteEmployee = async () => {
    try {
      await apiConnect.delete(
        `api/admin/deleteEmployee/${editableEmployee.idUser}`,
        EmployeeDetails.idUser
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card bg-white rounded shadow my-4 mt-5 w-100 h-auto mb-5">
        <div className="m-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png"
            onClick={onClose}
            className="position-absolute end-0 me-4"
            style={{ width: 15, height: 15 }}
          />
          <div
            className="fw-bolder fs-4 border-black border-bottom"
            style={{ color: bluee }}
          >
            Información Personal
          </div>

          <div className="pt-3 text-black d-flex mt-3">
            <div className="d-flex col-6 ">
              <label className="form-label text-secondary fw-bolder fs-5 me-2">
                Nombre:
              </label>
              <input
                type="text"
                name="name"
                value={editableEmployee.name}
                onChange={handleInputChange}
                className="form-control text-dark h-75 w-75 rounded-pill"
              />
            </div>
            <div className="d-flex col-6">
              <p className="text-secondary fw-bolder fs-5 me-2">Apellidos:</p>
              <input
                className="form-control ms-2 text-dark h-75 w-75 rounded-pill"
                type="text"
                name="lastnames"
                value={
                  editableEmployee.lastname + " " + editableEmployee.surname
                }
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="pt-3 text-black d-flex ">
            <div className="d-flex col-6">
              <label
                className="form-label text-secondary fw-bolder fs-5"
                style={{ width: 220 }}
              >
                Correo Electrónico:
              </label>
              <input
                type="text"
                name="email"
                value={editableEmployee.email}
                onChange={handleInputChange}
                className="form-control w-75 me-5 text-dark h-75 rounded-pill"
              />
            </div>
            <div className="d-flex col-6">
              <p className="text-secondary fw-bolder fs-5 me-2">Teléfono:</p>
              <input
                className="form-control ms-2 text-dark h-75 w-75 rounded-pill"
                type="text"
                name="telephone"
                value={editableEmployee.telephone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="pt-3 text-black d-flex ">
            <div className="d-flex col-6">
              <p className="text-secondary fw-bolder fs-5 me-2">Dirección:</p>
              <input
                className="form-control ms-2 text-dark h-75 w-75 rounded-pill"
                type="text"
                name="direction"
                value={
                  editableEmployee.Address.street +
                  ", " +
                  editableEmployee.Address.city +
                  ", " +
                  editableEmployee.Address.state +
                  ", " +
                  editableEmployee.Address.postal_code
                }
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="d-flex mt-3 mb-2 justify-content-center">
            <button
              className="btn border rounded-pill btn-success me-5 text-white "
              style={{ backgroundColor: bluee }}
              onClick={handleSaveChanges}
            >
              Guardar Cambios
            </button>
            <button
              className="btn border rounded-pill text-white"
              style={{ backgroundColor: orange }}
              onClick={handleDelete}
            >Eliminar Empleado
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
