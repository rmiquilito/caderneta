const Sequelize = require('sequelize')
const sequelize = require('../db')

const Credit = sequelize.define(
    'credit',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        customer: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })

module.exports = Credit