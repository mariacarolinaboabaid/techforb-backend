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
            type: DataTypes.STRING,
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

