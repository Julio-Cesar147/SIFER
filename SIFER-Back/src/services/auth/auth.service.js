const { User, Role } = require('../../models/models')
const { generateToken, verifyToken } = require('../../config/jwt')
const { hashPayload, comparePayload } = require('../../utils/functions')

const signin = async (email, password) => {
    const user = await User.findOne({ 
        where: { email: email },
        include: {
            model: Role,
            attributes: ['role']
        }
    })

    if (!user) {
        throw new Error('User not found')
    } else {
        const compare = await comparePayload(password, user.hash_password)

        if (!compare) {
            throw new Error('Password mismatch');
        } else {
            const token = generateToken({
                userEmail: user.email,
                userRole: user.role_name,
            })

            return token
        }
    }
}

module.exports = {
    signin
}