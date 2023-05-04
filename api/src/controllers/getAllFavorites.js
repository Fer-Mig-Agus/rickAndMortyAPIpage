
const Favorites = require("../db/models/Favorites");
const User = require("../db/models/User");

const getAllFavorites= async (req,res)=>{

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
        
        res.status(200).json(userSearch.favorites);
        
    } catch (error) {

        res.status(400).json({ error: error.messege });

    }

}

module.exports = getAllFavorites;