const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Reservation = sequelize.define( 'Reservation', {
    idReservation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'cancelled', 'completed'),
        allowNull: false,
        defaultValue: 'active'
    },
    reserved_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tablename: 'reservations',
    timestamps: false
})

module.exports = {
    Reservation
}