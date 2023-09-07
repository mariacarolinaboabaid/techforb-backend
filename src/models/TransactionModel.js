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
            type: DataTypes.STRING,
            allowNull: false,
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

