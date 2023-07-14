const User = require("./User.model");
const Favorite = require("./Favorite.model");

// //important: Aqui hago la tabla relacional
// User.belongsToMany(Favorite, { through: "UserFavorite" });
// Favorite.belongsToMany(User, { through: "UserFavorite" });


module.exports = {
    User,
    Favorite
}

