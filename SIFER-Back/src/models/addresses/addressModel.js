const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Address = sequelize.define( 'Address', {
    idAddress: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tablename: 'addresses',
    timestamps: false
})

module.exports = {
    Address
}