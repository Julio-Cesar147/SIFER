const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Role = sequelize.define( 'Role', {
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tablename: 'roles',
    timestamps: false
})

module.exports = {
    Role
}