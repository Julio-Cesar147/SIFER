const adminService = require ('../../services/admin/admin.service')

//Registrar empleado
const registerEmployee = async (req, res) => {
    try {
        const employee = await adminService.registerEmployee(req.body);
        res.status(201).json({ message: employee });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Mostrar empleados
const getAllEmployees = async (req, res) => {
    try {
        const employees = await adminService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Mostrar un empleado por ID
const getEmployeeById = async (req, res) => {
    try {
        const employee = await adminService.getEmployeeById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//Actualizar empleado
const updateEmployee = async (req, res) => {
    try {
        const employee = await adminService.updateEmployee(req.params.id, req.body);
        res.status(200).json({ message: employee });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Eliminar empleado
const deleteEmployee = async (req, res) => {
    try {
        const employee = await adminService.deleteEmployee(req.params.id);
        res.status(200).json({ message: employee });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    registerEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}
