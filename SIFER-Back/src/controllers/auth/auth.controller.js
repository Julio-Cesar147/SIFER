const authService = require('../../services/auth/auth.service')

const signin = async (req, res) => {
    try {
        const { email, password } = req.body

        const token = await authService.signin(email, password)

        res.status(200).json( token )
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

const register = async (req, res) => {
    try {
        const { name, lastname, surname, email, password, telephone, birthday, role, occupation, street, city, state, postal } = req.body

        const user = await authService.register({ name, lastname, surname, email, password, telephone, birthday, role, occupation, street, city, state, postal })

        res.status(201).json({ message: user })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })
    }
}

const changePassword = async (req, res) => {
    try {
        const password = req.body.password
        const idUser = req.params.id

        const message = await authService.changePassword(password, idUser)

        res.status(201).json({ message: message })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `${error}` })        
    }
}

module.exports = {
    signin,
    register,
    changePassword
}