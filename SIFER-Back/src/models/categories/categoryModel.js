const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Category = sequelize.define( 'Category', {
    idCategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'categories',
    timestamps: false
})

module.exports = {
    Category
}