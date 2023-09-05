const { Model, DataTypes } = require("sequelize");
const sequelize = require('./connection');
const User = require('./UserModel');

class Card extends Model { }

Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        expirationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
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
        modelName: "cards",
        timestamps: false
    }
);

module.exports = Card;

// const connectionDB = require('./connection');

// const getAll = async() => 
// {
//     const cards = await connectionDB.execute('SELECT * FROM Cards');
//     return cards[0];
// };

// const createCard = async (userId, card) => {
//     const { number, expirationDate } = card;
//     const query = 'INSERT INTO Cards(number, expirationDate, userId) VALUES (?, ?, ?)';
//     const [createdCard] = await connectionDB.execute(query, [number, expirationDate, userId]);
//     return { insertId: createCard.insertId };
// }

// module.exports = {
//     getAll,
//     createCard
// }