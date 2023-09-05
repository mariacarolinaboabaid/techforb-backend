const { Model, DataTypes } = require("sequelize");
const sequelize = require('./connection');
const User = require('./UserModel');

class Transaction extends Model { }

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW 
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        value: {
            type: DataTypes.DOUBLE(10, 2),
            defaultValue: 0.00,
            validate: {
                notEmpty: true,
                isNumeric: true,
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    },
    {
        sequelize,
        modelName: "transactions",
        timestamps: false
    }
);

module.exports = Transaction;

// const getAll = async () => {
//     const transactions = await connectionDB.execute('SELECT * FROM Transactions');
//     return transactions[0];
// };

// const createTransaction = async (userId, transaction) => {
//     const { value, date, type, description } = transaction;
//     const queryCreate = 'INSERT INTO Transactions(value, date, type, description, userId) VALUES (?, ?, ?, ?, ?)';
//     const [createdTransaction] = await connectionDB.execute(queryCreate, [value, date, type, description || "None", userId]);
//     return { insertId: createdTransaction.insertId };
// }

// module.exports = {
//     getAll,
//     createTransaction
// }