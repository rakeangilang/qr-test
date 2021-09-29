const { DataTypes } = require('sequelize')
const { sequelizeDB1 } = require('../config/dbconn')

const Product = sequelizeDB1.define('product', {
    product: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branch: {
        type: DataTypes.STRING,
        allowNull: false
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: 'product',
        timestamps: false
    })

const countAll = Product.findAndCountAll

module.exports = Product