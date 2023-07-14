
const { User, Favorite } = require("../../../../db/models/relationShips");

const getAllFavorites = async (req, res) => {

    const { idUser } = req.query;

    try {

        const user = await User.findByPk(idUser);
        if (!user) return res.status(404).json({ status: 404, error: "El usuario no existe" });

        const favoritesOfUser = await Favorite.findAll({ where: { idUser } });

        res.status(200).json({ status: 200, message: "Todos los favoritos.", data: favoritesOfUser });

    } catch (error) {

        res.status(500).json({ status: 500, error: error.messege });

    }

}

module.exports = getAllFavorites;