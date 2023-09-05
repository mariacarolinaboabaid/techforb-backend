const connectionDB = require('./connection');


const getAll = async () => {
    const transactions = await connectionDB.execute('SELECT * FROM Transactions');
    return transactions[0];
};

const createTransaction = async (userId, transaction) => {
    const { value, date,  type, description } = transaction;
    const queryCreate = 'INSERT INTO Transactions(value, date, type, description, userId) VALUES (?, ?, ?, ?, ?)';
    const [createdTransaction] = await connectionDB.execute(queryCreate, [value, date, type, description || "None", userId]);
    return {insertId: createdTransaction.insertId};
}

module.exports = {
    getAll,
    createTransaction
}