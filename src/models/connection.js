const mysql = require('mysql2/promise');
require('dotenv').config();

const connectionDB = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE
})

module.exports = connectionDB;
