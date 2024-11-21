const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const ReservationDetail = sequelize.define( 'ReservationDetail', {
    idReDetails: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    reserved_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reserved: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'reservation_details',
    timestamps: false
})

module.exports = {
    ReservationDetail
}