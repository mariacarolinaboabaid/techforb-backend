const cardModel = require('../models/CardModel');

const getAll = async (request, response) => {
    try {
        const cards = await cardModel.findAll();
        return response.status(200).json(cards);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }

};

const createCard = async (request, response) => {
    try {
        const createdCard = await cardModel.create(request.body);
        return response.status(201).json(createdCard);
    }
    catch (error) {
        console.log(error);
        return response.status(400).send(error);
    }
};

module.exports = {
    getAll,
    createCard
};