const cardModel = require('../models/CardModel');

const getAll = async (request, response) => {
    try {
        const userId = parseInt(request.params.id);
        const cards = await cardModel.findAll({ where: { userId: userId } });
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
    createCard
};