const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const History = sequelize.define( 'History', {
    idHistory: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    total_sales: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    sales_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    seller: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tablename: 'history',
    timestamps: false
})

module.exports = {
    History
}