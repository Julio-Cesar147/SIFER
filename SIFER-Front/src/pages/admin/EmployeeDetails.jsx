import Navbar from "./NavBar";
import React, { useState } from "react";
const blue = "#282C37";
const orange = '#F75409';
const bluee = "#04478D";
const red = "#DF0000";
import Swal from 'sweetalert2';

const EmployeeDetails = ({selectedEmployee, onClose, onSave, onDelete }) => {

    const [editableEmployee, setEditableEmployee] = useState({ ...selectedEmployee });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableEmployee({ ...editableEmployee, [name]: value });
    };

    const handleSaveChanges = () => {
        onSave(editableEmployee);
        Swal.fire("Guardado", "Los cambios han sido guardados", "success");
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
        }).then((result) => {
        if (result.isConfirmed) {
            onDelete(editableEmployee); 
            Swal.fire({
                icon: "success",
                title: "Empleado Eliminado",
                showConfirmButton: false,
                timer: 2500
            });
        }
        });
    };

    return(
        <>
            <div className="card bg-white rounded shadow my-4 mt-5 w-100 h-auto mb-5">
                <div className="m-4">
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" onClick={onClose} className='position-absolute end-0 me-4' style={{width:15, height:15}}/>
                    <div className="fw-bolder fs-4 border-black border-bottom" style={{color: bluee}}>Información Personal</div>

                    <div className="pt-3 text-black d-flex mt-3">
                        <div className="d-flex col-6 ">
                            <label className="form-label text-secondary fw-bolder fs-5 me-2">Nombre:</label>
                            <input type="text" name="name" value= {editableEmployee.name} onChange={handleInputChange} className="form-control text-dark h-75 w-75 rounded-pill"/>
                        </div> 
                        <div className="d-flex col-6">
                            <p className="text-secondary fw-bolder fs-5 me-2">Apellidos:</p>
                            <input className="form-control ms-2 text-dark h-75 w-75 rounded-pill" type="text" name="lastname" value= {editableEmployee.lastname} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="pt-3 text-black d-flex ">
                        <div className="d-flex col-6">
                            <label className="form-label text-secondary fw-bolder fs-5" style={{width:220}}>Correo Electrónico:</label>
                            <input type="text" name="email" value= {editableEmployee.email} onChange={handleInputChange} className="form-control w-75 me-5 text-dark h-75 rounded-pill"/>
                        </div> 
                        <div className="d-flex col-6">
                            <p className="text-secondary fw-bolder fs-5 me-2">Teléfono:</p>
                            <input className="form-control ms-2 text-dark h-75 w-75 rounded-pill" type="text" name="phone" value= {editableEmployee.phone} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="pt-3 text-black d-flex ">
                        <div className="d-flex col-6">
                            <label className="form-label text-secondary fw-bolder fs-5 me-2">Contraseña:</label>
                            <input type="password" name="password" value= {editableEmployee.password} onChange={handleInputChange} className="form-control w-75 me-5 text-dark h-75 rounded-pill"/>
                        </div> 
                        <div className="d-flex col-6">
                            <p className="text-secondary fw-bolder fs-5 me-2">Dirección:</p>
                            <input className="form-control ms-2 text-dark h-75 w-75 rounded-pill" type="text" name="direccion" value= {editableEmployee.direccion} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="pt-3 text-black d-flex ">
                        <div className="d-flex col-6">
                            <label className="form-label text-secondary fw-bolder fs-5" style={{width:220}}>Estado:</label>
                            <input type="text" name="estado" value= {editableEmployee.estado} onChange={handleInputChange} className="form-control w-75 me-5 text-dark h-75 rounded-pill"/>
                        </div> 
                    </div>
                    <div className="d-flex mt-3 mb-2 justify-content-center">
                        <button className="btn border rounded-pill btn-success me-5 text-white " style={{backgroundColor: bluee}} onClick={handleSaveChanges}>
                            Guardar Cambios
                        </button>
                        <button className="btn border rounded-pill text-white" style={{backgroundColor: orange}} onClick={handleDelete}>
                            Eliminar Empleado
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default EmployeeDetails;