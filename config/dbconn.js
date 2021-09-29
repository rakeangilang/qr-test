const { Sequelize } = require("sequelize");
const config = {
    host: "localhost",
    username: "root",
    password: "",
    database: "qr_test",
    dialect: "mysql"
}

const sequelizeDB1 = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql'
})

const connect = async () => {
    try {
        await sequelizeDB1.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelizeDB1 }