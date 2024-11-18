const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Unit = sequelize.define( 'Unit', {
    idUnit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tablename: 'Unit',
    timestamps: false
})

module.exports = {
    Unit
}