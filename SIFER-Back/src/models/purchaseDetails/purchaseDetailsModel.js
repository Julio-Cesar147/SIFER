const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const PurchaseDetail = sequelize.define( 'PurchaseDetail', {
    idPurchase: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    sales_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    record: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tablename: 'purchase_details',
    timestamps: false
})

module.exports = {
    PurchaseDetail
}