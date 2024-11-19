const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Product = sequelize.define( 'Product', {
    idProduct: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    selling_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    minimum_stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maximum_stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    brand: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tablename: 'products',
    timestamps: false
})

module.exports = {
    Product
}