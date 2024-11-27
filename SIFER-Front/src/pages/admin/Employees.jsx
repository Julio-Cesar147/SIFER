import Navbar from '../admin/NavBar.jsx';
import React, { useState } from 'react';
const blue = "#282C37";
const orange = '#F75409';
const bluee = "#04478D";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeDetails from './EmployeeDetails.jsx';

const Employees = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employees, setEmployees] = useState([
        { name: 'Ana', lastname: 'Franco', email: 'anafranc@utez.edu.mx', phone: '7774178402', estado: 'Activo', password: '12345', direccion: 'Av. Plutarco elias' },
        { name: 'Rogelio', lastname: 'Guzman', email: 'rogeguz@gmail.com', phone: '7778031475', estado: 'Activo',password: '34567', direccion: 'calle sin limite' },
        { name: 'Cecilia', lastname: 'Rojas', email: 'cecirojas@gmail.com', phone: '7770147321', estado: 'Inactivo',password: '56789', direccion: 'el corazon roto' },
        { name: 'Alejandra', lastname: 'Ortiz', email: 'aleortiz@utez.edu.mx', phone: '7774730849', estado: 'Inactivo',password: '7891011', direccion: 'Av. sin numero principal' },
        { name: 'Minerva', lastname: 'Duran', email: 'minedu@gmail.com', phone: '7770134781', estado: 'Activo' ,password: '1111213', direccion: 'Calle el que va viene'},
        { name: 'Emiliano', lastname: 'Mendoza', email: 'emimen@gmail.com', phone: '7778407613', estado: 'Activo',password: '13141516', direccion: 'Av. Rivapalacios' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        estado: 'Activo',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleAddEmployee = () => {
        setEmployees([...employees, newEmployee]);
        setNewEmployee({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        estado: 'Activo',
        });
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
    
    const filteredEmployees = employees.filter(
        (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [showPassword, setShowPassword] = useState(false);

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
            placeholder="Buscar empleado..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="input-group-text bg-white border-0">
            <i className="bi bi-search"></i>
        </span>

        <button
            className="text-white btn rounded-pill text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: bluee, fontSize: 20, width: 100, height: 35 }}
            onClick={() => setShowModal(true)}>Agregar</button>
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
                {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee, index) => (
                    <tr
                    key={index}
                    className={employee.estado === 'Inactivo' ? 'table-success' : ''}
                    onClick={() => setSelectedEmployee(employee)}
                    style={{ cursor: 'pointer' }}
                    >
                    <td>{employee.name}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.estado}</td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="6" className="text-center text-muted">
                    No se encontraron resultados
                    </td>
                </tr>
                )}
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
            <div className="modal fade show d-block" style={{marginTop: 30}} tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Agregar Empleado</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)} ></button>
                    </div>
                    <div className="modal-body ">
                    <form>
                        <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input  type="text"  className="form-control" name="name" value={newEmployee.name} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control" name="lastname" value={newEmployee.lastname} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={newEmployee.email} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" name="phone" value={newEmployee.phone}  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <input type="direccion" className="form-control" name="direccion" value={newEmployee.direccion}  onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <div className="d-flex">
                            <input type={showPassword ? "text" : "password"} className="form-control" name="password" value={newEmployee.password}  onChange={handleInputChange}/>
                            <button type="button" className="btn btn-outline-secondary border-white" onClick={() => setShowPassword(!showPassword)}>
                                <img src={ showPassword
                                        ? "https://cdn-icons-png.flaticon.com/128/565/565655.png" 
                                        : "https://cdn-icons-png.flaticon.com/128/2874/2874780.png" 
                                    }
                                alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                style={{ width: "20px", height: "20px" }}/>
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">

                <button type="button" className="btn text-white" style={{backgroundColor: bluee}} onClick={handleAddEmployee}> Guardar </button>
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
