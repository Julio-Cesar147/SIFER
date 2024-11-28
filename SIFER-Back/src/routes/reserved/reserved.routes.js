const { Router } = require('express')
const reservedController = require('../../controllers/reserved/reserved.controller')

const reservedRouter = Router()

reservedRouter.post('/booking', [], reservedController.reserved)
reservedRouter.post('/collection', [], reservedController.collection)
reservedRouter.get('/:code', [], reservedController.getReservation)
reservedRouter.get('/', [], reservedController.getAllReservations)
reservedRouter.patch('/', [], reservedController.cancelReservation) 

module.exports = {
    reservedRouter
}