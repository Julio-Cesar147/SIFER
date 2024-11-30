const { Router } = require('express')
const occupationsController = require('../../controllers/occupations/occupations.controller')

const occupationsRouter = Router()

occupationsRouter.get('/', [], occupationsController.getAll)

module.exports = {
    occupationsRouter
}