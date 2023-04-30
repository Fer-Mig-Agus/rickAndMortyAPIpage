
const Favorites = require("../db/models/Favorites");

const deleteFavorite = async (req, res) => {
    
    const {id}=req.params;

    try {
        
        const borrarFav = await Favorites.destroy({ where: { id:id }})
        if (borrarFav === 0) {
            return res.status(400).json({error: "Id no encontrado"});
        }

        res.status(200).json({id});
    } catch (error) {
        res.status(400).json({ error: error.messege });
    }
}

module.exports = deleteFavorite;