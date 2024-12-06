const { Router } = require('express')
const reservedController = require('../../controllers/reserved/reserved.controller')
const { protectedEndpoint } = require('../../config/jwt')

const reservedRouter = Router()

reservedRouter.post('/booking', [protectedEndpoint('Cliente')], reservedController.reserved)
reservedRouter.post('/collection', [protectedEndpoint('Empleado')], reservedController.collection)
reservedRouter.get('/:code', [protectedEndpoint('Empleado')], reservedController.getReservation)
reservedRouter.get('/', [protectedEndpoint('Empleado', 'Cliente')], reservedController.getAllReservations)
reservedRouter.get('/history/h', [protectedEndpoint('Administrador')], reservedController.getHistory)
reservedRouter.patch('/', [], reservedController.cancelReservation)
reservedRouter.get('/history/h/:start/:end', [protectedEndpoint('Administrador')], reservedController.filteredHistory)

module.exports = {
    reservedRouter
}