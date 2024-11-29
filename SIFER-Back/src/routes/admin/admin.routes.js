const { Router } = require('express')
const adminController = require('../../controllers/admin/admin.controller')

const adminRouter = Router()

adminRouter.post('/registerEmployee', [], adminController.registerEmployee)
adminRouter.get('/getAllEmployees', [], adminController.getAllEmployees)
adminRouter.get('/getEmployee/:id', [], adminController.getEmployeeById)
adminRouter.put('/updateEmployee/:id', [], adminController.updateEmployee)
adminRouter.delete('/deleteEmployee/:id', [], adminController.deleteEmployee)

module.exports ={
    adminRouter
}