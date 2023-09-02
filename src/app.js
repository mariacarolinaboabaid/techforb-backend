// Imports
const express = require('express');
const router = require('./router');

// Express instantiation
const app = express();

// Use of routes
app.use(router);

module.exports = app;