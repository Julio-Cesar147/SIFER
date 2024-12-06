const { Router } = require('express')
const adminController = require('../../controllers/admin/admin.controller')
const { protectedEndpoint } = require('../../config/jwt')

const adminRouter = Router()

adminRouter.post('/registerEmployee', [], adminController.registerEmployee)
adminRouter.get('/getAllEmployees', [protectedEndpoint('Administrador')], adminController.getAllEmployees)
adminRouter.get('/getEmployee/:id', [protectedEndpoint('Administrador', 'Empleado', 'Cliente')], adminController.getEmployeeById)
adminRouter.put('/updateEmployee/:id', [protectedEndpoint('Administrador')], adminController.updateEmployee)
adminRouter.delete('/deleteEmployee/:id', [protectedEndpoint('Administrador')], adminController.deleteEmployee)

module.exports ={
    adminRouter
}