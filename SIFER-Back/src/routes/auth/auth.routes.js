const { Router } = require('express')
const authController = require('../../controllers/auth/auth.controller')

const authRouter = Router()

authRouter.post('/', [], authController.signin)
authRouter.post('/register', [], authController.register)
authRouter.patch('/:id', [], authController.changePassword)

module.exports = {
    authRouter
}