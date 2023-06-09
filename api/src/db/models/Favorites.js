const { DataTypes } = require("sequelize");
const baseDeDatos = require("../db");


const Favorites = baseDeDatos.define("favorite", {
    idFav: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { timestamps: false });





module.exports = Favorites;