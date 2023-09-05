const cardModel = require('../models/CardModel');

const getAll = async(request, response) => {
    const cards = await cardModel.getAll();
    return response.status(200).json(cards);
};

const createCard = async(request, response) => 
{
    const userId = parseInt(request.params.id);
    const createdCard= await cardModel.createCard(userId, request.body);
    return response.status(201).json(createdCard);
}


module.exports = {
    getAll,
    createCard
};