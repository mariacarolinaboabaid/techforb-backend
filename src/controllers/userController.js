const userModel = require('../models/UserModel');

const getAll = async (request, response) => {
    try {
        const users = await userModel.findAll();
        return response.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }
};

const getUserBalance = async (request, response) => {
    try {
        const userId = parseInt(request.params.id);
        const balance = await userModel.findOne({ attributes: ['balance']} , { where: { id: userId } });
        return response.status(200).json(balance);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }
};

const createUser = async (request, response) => {
    try {
        const createdUser = await userModel.create(request.body);
        return response.status(201).json(createdUser);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }
};

module.exports = {
    getAll,
    getUserBalance,
    createUser
};