const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Brand = sequelize.define( 'Brand', {
    idBrand: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tablename: 'brands',
    timestamps: false
})

module.exports = {
    Brand
}