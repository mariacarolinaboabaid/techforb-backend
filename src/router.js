const express = require('express');
const { request, response } = require('./app');

// Creation of routes
const router = express.Router();

// Get users
router.get('/getUsers', (request, response) => { response.status(200).send('Users')});

// Get balance
router.get('/getBalance', (request, response) => { response.status(200).send('Balance!')});

// Get transactions
router.get('/getTransactions', (request, response) => { response.status(200).send('Transactions!')});

// Get cards
router.get('/getCards', (request, response) => { response.status(200).send('Cards!')});

// Get optionsMenu
router.get('/getOptionsMenu', (request, response) => { response.status(200).send('Options menu')});

module.exports = router;