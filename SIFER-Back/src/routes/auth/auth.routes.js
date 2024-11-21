const { Router } = require('express')
const authController = require('../../controllers/auth/auth.controller')

const authRouter = Router()

authRouter.post('/', [], authController.signin)

module.exports = {
    authRouter
}