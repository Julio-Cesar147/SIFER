const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Category = sequelize.define( '', {
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
    tablename: 'categories',
    timestamps: false
})

module.exports = {
    Category
}