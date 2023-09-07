const transactionModel = require('../models/TransactionModel');
const userModel = require('../models/UserModel');

const getAll = async (request, response) => {
    try {
        const userId = parseInt(request.params.id);
        const transactions = await transactionModel.findAll({
            where: { userId: userId },
            order: [['date', 'DESC']],
            limit: 5
        });
        return response.status(200).json(transactions);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }
};

const createTransaction = async (request, response) => {
    try {
        const userId = parseInt(request.params.id);
        const createdTransaction = await transactionModel.create(request.body);

        // Updating the balance
        const balance = await userModel.findOne({ attributes: ['balance'] }, { where: { id: userId } });
        const balanceNumber = parseFloat(balance["dataValues"]["balance"]);
        var newValue;

        if (request.body["type"] === "transferencia" || request.body["type"] === "saque") {
            newValue = balanceNumber - request.body.value;
        }
        else if (request.body["type"] === "deposito") {
            newValue = balanceNumber + request.body.value;
        }

        await userModel.update({ balance: newValue }, { where: { id: userId } });

        return response.status(201).json(createdTransaction);
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map((err) => err.message);
            return response.status(400).json({ error: 'Validation Error', messages: errorMessages });
        } else {
            return response.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = {
    getAll,
    createTransaction
};


