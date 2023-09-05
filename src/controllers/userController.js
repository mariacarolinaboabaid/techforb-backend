const userModel = require('../models/UserModel');

const getAll = async(request, response) => {
    const users = await userModel.getAll();
    return response.status(200).json(users);
};

const getUserBalance = async(request, response) => {
    const balance = await userModel.getUserBalance();
    return response.status(200).json(balance);
}

const createUser = async(request, response) => 
{
    const createdUser = await userModel.createUser(request.body);
    return response.status(201).json(createdUser);
}

module.exports = {
    getAll,
    getUserBalance,
    createUser
};