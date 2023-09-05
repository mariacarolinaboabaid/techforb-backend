const { Model, DataTypes } = require("sequelize");
const sequelize  = require('./connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        balance: {
            type: DataTypes.DOUBLE(10, 2),
            defaultValue: 0.00
        }
    },
    {
        sequelize,
        modelName: "users",
        timestamps: false

    }
);

module.exports = User;
