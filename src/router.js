const express = require('express');

const userController =  require('./controllers/UserController');
const userValidator = require('./middlewares/userMiddleware');

const transactionController =  require('./controllers/transactionController');
const transactionValidator = require('./middlewares/transactionMiddleware');

const cardController =  require('./controllers/cardController');
const cardValidator = require('./middlewares/cardMiddleware')

// Creation of routes
const router = express.Router();

// Users
router.get('/getUsers', userController.getAll);
router.post('/postUser', userValidator.validateBody, userController.createUser);


// Balance
router.get('/getBalance', userController.getUserBalance);


// Transactions
router.get('/getTransactions', transactionController.getAll);
router.post('/postTransaction/:id', transactionValidator.validateBody, transactionController.createTransaction);

// Cards
router.get('/getCards', cardController.getAll);
router.post('/postCard/:id', cardValidator.validateBody, cardController.createCard);

module.exports = router;

