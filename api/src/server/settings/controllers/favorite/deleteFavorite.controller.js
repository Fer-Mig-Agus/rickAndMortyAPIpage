
const { User, Favorite } = require("../../../../db/models/relationShips");

const deleteFavorite = async (req, res) => {

    const { id } = req.params;
    const { idUser } = req.query;

    console.log("id del personaje:", id);
    console.log("id del usuario: ", idUser);


    try {

        const user = await User.findByPk(idUser);
        if (!user) return res.status(404).json({ status: 404, error: "El usuario no existe" });

        const favoritesOfUser = await Favorite.findAll({ where: { idUser: idUser } });

        console.log("Favoritos del usuario: ", favoritesOfUser)


        const foundFavorite = favoritesOfUser.find((fav) => fav.id == id);

        console.log("Favorito a borrar", foundFavorite);

        if (!foundFavorite) return res.status(404).json({ status: 404, error: "No existe el favorito" })


        const borrarFav = await Favorite.destroy({ where: { idFavorite: foundFavorite.dataValues?.idFavorite } })
        if (borrarFav === 0) {
            return res.status(404).json({ status: 404, error: "Id no encontrado" });
        }

        res.status(204).json({ status: 204, message: "Eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.messege });
    }
}

module.exports = deleteFavorite;
