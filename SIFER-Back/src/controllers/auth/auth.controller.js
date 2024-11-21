const authService = require('../../services/auth/auth.service')

const signin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password)
            res.status(400).json({ message: 'Missing fields' })

        const token = await authService.signin(email, password)

        res.status(201).json({ token: token })
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: `Ups we have a problem: ${error}` })
    }
}

module.exports = {
    signin
}