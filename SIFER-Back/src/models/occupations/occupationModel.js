const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Occupation = sequelize.define( 'Occupation', {
    idOccupation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false        
    }
},{
    tableName: 'occupations',
    timestamps: false
})

module.exports = {
    Occupation
}