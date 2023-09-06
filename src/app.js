// Imports
const express = require('express');
const router = require('./router');
const sequelize = require('./models/connection');
const cors = require('cors');


sequelize.sync().then(() => console.log("database connected successfully 🏦"));

// Express instantiation
const app = express();
app.use(express.json());

// Allow all requests
app.use(cors());


// Use of routes
app.use(router);

module.exports = app;