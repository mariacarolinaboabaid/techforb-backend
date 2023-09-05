const transactionModel = require('../models/TransactionModel');
const userModel = require('../models/UserModel');

const getAll = async(request, response) => {
    const transactions = await transactionModel.getAll();
    return response.status(200).json(transactions);
};

const createTransaction = async(request, response) => 
{
    const userId = parseInt(request.params.id);
    const createdTransaction = await transactionModel.createTransaction(userId, request.body);

    // Upating the value of balance 
    const balance = await userModel.getUserBalance();
    const balanceNumber = parseFloat(balance[0]["balance"]);

    var newValue = 0
    
    if (request.body["type"] === "transfer" || request.body["type"] === "withdraw")
    {
        newValue = balanceNumber - request.body.value;
    }
    else if (request.body["type"] === "deposit")
    {
        newValue = balanceNumber + request.body.value;
    }

    const updatedBalance = await userModel.updateBalance(userId, newValue);

    return response.status(201).json(createdTransaction);
   
}

module.exports = {
    getAll, 
    createTransaction
};