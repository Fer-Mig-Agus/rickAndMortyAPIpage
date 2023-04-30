const {DataTypes}=require("sequelize");
const baseDeDatos =require("../db");
const Favorites=require("./Favorites");


const User = baseDeDatos.define("user",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    },{timestamps:false}

    );


//important: Aqui hago la tabla relacional
User.belongsToMany(Favorites, { through: "UserFavorites" });
Favorites.belongsToMany(User, { through: "UserFavorites" });

module.exports=User;