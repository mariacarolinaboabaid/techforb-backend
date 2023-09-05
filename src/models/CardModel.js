const connectionDB = require('./connection');

const getAll = async() => 
{
    const cards = await connectionDB.execute('SELECT * FROM Cards');
    return cards[0];
};

const createCard = async (userId, card) => {
    const { number, expirationDate } = card;
    const query = 'INSERT INTO Cards(number, expirationDate, userId) VALUES (?, ?, ?)';
    const [createdCard] = await connectionDB.execute(query, [number, expirationDate, userId]);
    return { insertId: createCard.insertId };
}

module.exports = {
    getAll,
    createCard
}