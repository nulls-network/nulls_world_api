// Require and initialize outside of your main handler
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('nulls-world-game', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST    ,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    define:{
        "timestamps" : false 
    },
    pool: {
        max: 15,
        min: 5,
        idle: 20000,
        evict: 15000,
        acquire: 30000
    },
});


module.exports = sequelize
