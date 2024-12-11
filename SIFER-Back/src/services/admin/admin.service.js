const {User, Address, Role} = require('../../models/models')
const { hashPayload } = require('../../utils/functions')
const sequelize = require('../../config/database')

//Registrar empleado
const registerEmployee = async (payload) => {
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

const numberCero = "0"

//Mostrar todos los empleados
const getAllEmployees = async () => {
    try {

        const employees = await User.findAll({
            include: [{ model: Address},{ model:Role }]
        });

        for (const employee of employees) {
            employee.telephone = numberCero
        }

        return employees;

    } catch (error) {
        throw new Error('Failed to fetch employees');
    }
};

//Mostrar un empleado por ID
const getEmployeeById = async (idUser) => {
    if (!idUser) throw new Error('User ID is required');

    try {

        const employee = await User.findByPk(idUser, {
            include: [{ model: Address },{ model:Role }]
        });

        if (!employee) throw new Error('Employee not found');
        return employee;

    } catch (error) {
        throw new Error('Failed to fetch employee');
    }
};


//Actualizar empleado
const updateEmployee = async (idUser, payload) => {

    if (!idUser) throw new Error('User ID is required');
    try {
        const result = await sequelize.transaction(async (transaction) => {
            await User.update({
                name: payload.name,
                lastname: payload.lastname,
                surname: payload.surname,
                email: payload.email,
                telephone: payload.telephone,
                //birthday: payload.birthday,
                //role: payload.role,
                //occupation: payload.occupation
            }, { where: { idUser }, transaction });

            await Address.update({
                street: payload.street,
                city: payload.city,
                state: payload.state,
                postal_code: payload.postal
            }, { where: { user: idUser }, transaction });

            return 'User updated successfully';
        });

        return result;
    } catch (error) {
        throw new Error('Failed to update user');
    }
};


//Eliminar empleado
const deleteEmployee = async (idUser) => {
    if (!idUser) throw new Error('User ID is required');

    try {
        const result = await sequelize.transaction(async (transaction) => {
            await Address.destroy({ where: { user: idUser }, transaction });
            await User.destroy({ where: { idUser }, transaction });
            return 'User deleted successfully';
        });

        return result;
    } catch (error) {
        throw new Error('Failed to delete user');
    }
};


module.exports = {
    registerEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}