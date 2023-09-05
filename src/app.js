// Imports
const express = require('express');
const router = require('./router');
const sequelize = require('./models/connection');

sequelize.sync().then(() => console.log("database connected successfully 🏦"));

// Express instantiation
const app = express();
app.use(express.json());



// Use of routes
app.use(router);

module.exports = app;