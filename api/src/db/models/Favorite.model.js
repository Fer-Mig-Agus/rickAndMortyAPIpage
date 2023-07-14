const { DataTypes } = require("sequelize");
const baseDeDatos = require("../db");


const Favorite = baseDeDatos.define("favorite", {
    idFavorite: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    idUser: {
        type: DataTypes.UUID,
    },
    id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
    },
    image: {
        type: DataTypes.STRING,
    },
    species: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    origin: {
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,

});





module.exports = Favorite;