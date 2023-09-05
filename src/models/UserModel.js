const connectionDB = require('./connection');

const getAll = async () => {
    const users = await connectionDB.execute('SELECT * FROM Users');
    return users[0];
};

const getUserBalance = async () => {
    const balance = await connectionDB.execute('SELECT balance FROM Users WHERE id=1')
    return balance[0]
}

const createUser = async (user) => {
    const { username, password } = user;
    const query = 'INSERT INTO Users(username, password, balance) VALUES (?, ?, ?)';
    const [createdUser] = await connectionDB.execute(query, [username, password, 0.00]);
    return { insertId: createdUser.insertId };
}

const updateBalance = async (userId, value) => {
    const query = 'UPDATE Users SET balance = ? WHERE id = ?';
    const [updatedBalance] = await connectionDB.execute(query, [value, userId]);
    return updatedBalance;
};

module.exports = {
    getAll,
    getUserBalance,
    createUser,
    updateBalance
}