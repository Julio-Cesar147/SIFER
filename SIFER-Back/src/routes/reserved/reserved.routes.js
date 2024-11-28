const { Router } = require('express')
const reservedController = require('../../controllers/reserved/reserved.controller')

const reservedRouter = Router()

reservedRouter.post('/booking', [], reservedController.reserved)
reservedRouter.post('/collection', [], reservedController.collection)

module.exports = {
    reservedRouter
}