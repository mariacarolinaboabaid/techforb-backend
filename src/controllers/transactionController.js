const transactionModel = require('../models/TransactionModel');
const userModel = require('../models/UserModel');

const getAll = async (request, response) => {
    try {
        const transactions = await transactionModel.findAll();
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
        const balance = await userModel.findOne({ attributes: ['balance']} , { where: { id: userId } });
        const balanceNumber = parseFloat(balance["dataValues"]["balance"]);
        var newValue;

        if (request.body["type"] === "transfer" || request.body["type"] === "withdraw") {
            newValue = balanceNumber - request.body.value;
        }
        else if (request.body["type"] === "deposit") {
            newValue = balanceNumber + request.body.value;
        }

        await userModel.update({ balance: newValue }, { where: {id : userId } });
     
        return response.status(201).json(createdTransaction);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }
};

module.exports = {
    getAll,
    createTransaction
};


