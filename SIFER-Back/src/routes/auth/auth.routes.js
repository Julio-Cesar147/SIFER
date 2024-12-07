const { Router } = require('express')
const authController = require('../../controllers/auth/auth.controller')
const { protectedEndpoint } = require('../../config/jwt')

const authRouter = Router()

authRouter.post('/', [], authController.signin)
authRouter.post('/register', [], authController.register)
authRouter.patch('/:id', protectedEndpoint('Administrador', 'Empleado', 'Cliente'), authController.changePassword)

module.exports = {
    authRouter
}