
const Favorites = require("../db/models/Favorites");
const User=require("../db/models/User");

const deleteFavorite = async (req, res) => {
    
    const {id}=req.params;
    const {idUser}=req.query;

    try {

        const user = await User.findByPk(idUser);
        if (!user) return res.status(400).json({ Error: "El usuario no existe" });

        const userSearch = await User.findByPk(idUser, {
            include: [{
                model: Favorites,
                through: {
                    attributes: []
                }
            }
            ]
        });

        const userFavorites = userSearch.favorites;

        console.log(userFavorites);

        const foundFavorite=userFavorites.find((fav)=> fav.id == id);

        if (!foundFavorite) return res.status(400).json({ error: "No existe el favorito" })

        
        const borrarFav = await Favorites.destroy({ where: { id:foundFavorite.id }})
        if (borrarFav === 0) {
            return res.status(400).json({error: "Id no encontrado"});
        }

        res.status(200).json({id});
    } catch (error) {
        res.status(400).json({ error: error.messege });
    }
}

module.exports = deleteFavorite;