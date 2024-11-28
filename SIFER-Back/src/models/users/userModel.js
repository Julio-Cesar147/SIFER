const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const User = sequelize.define( 'User', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    hash_password: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    occupation: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'users',
    timestamps: false
})

module.exports = {
    User
}