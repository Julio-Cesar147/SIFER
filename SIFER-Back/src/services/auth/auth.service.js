const { User, Role, Address } = require('../../models/models')
const { generateToken, verifyToken } = require('../../config/jwt')
const { hashPayload, comparePayload } = require('../../utils/functions')
const sequelize = require('../../config/database')

const signin = async (email, password) => {
    if (!email || !password)
        throw new Error('Missing fields')
    
    const user = await User.findOne({ 
        where: { email: email },
        include: {
            model: Role,
            attributes: ['role']
        }
    })

    if (!user) {
        throw new Error('Incorrect Email or Password')
    } else {
        const compare = await comparePayload(password, user.hash_password)

        if (!compare) {
            throw new Error('Incorrect Email or Password')
        } else {
            const token = generateToken({
                userEmail: user.email,
                userRole: user.Role.role,
            })

            const role = user.Role.role

            return {token, role}
        }
    }
}

const register = async (payload) => {
    if (!payload.name || !payload.lastname || !payload.surname || !payload.email || !payload.password || !payload.telephone || !payload.birthday || !payload.role || !payload.occupation || !payload.street || !payload.city || !payload.state || !payload.postal)
        throw new Error('Missing fields')

    const duplicateEmail = await User.findOne({
        where: {
            email: payload.email
        }
    })

    if (duplicateEmail)
        throw new Error('This email is already in use')

    try {
        const result = await sequelize.transaction(async (transaction) => {
            const user = await User.create({
                name: payload.name,
                lastname: payload.lastname,
                surname: payload.surname,
                email: payload.email,
                hash_password: await hashPayload(payload.password),
                telephone: payload.telephone,
                birthday: payload.birthday,
                role: payload.role,
                occupation: payload.occupation
            },{
                transaction: transaction
            })
    
            await Address.create({
                street: payload.street,
                city: payload.city,
                state: payload.state,
                postal_code: payload.postal,
                user: user.idUser
            },{
                transaction: transaction
            })
    
            return message = 'User registered succesfully'
        })

        return result
    } catch (error) {
        throw new Error('Failed to registered user')
    } 
}

const changePassword = async (password, idUser) => {
    if (!password || !idUser)
        throw new Error('Missing fields')
    
    const user = await User.findOne({
        where: { idUser: idUser }
    })

    if (!user) {
        throw new Error('User not found')
    } else {
        const updated = await user.update({ 
            hash_password: await hashPayload(password)
        })

        if (!updated) {
            throw new Error('Error updating')  
        }
        
        return message = 'Password updated sucessfully'
    }
}

module.exports = {
    signin,
    register,
    changePassword
}