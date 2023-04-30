
const Favorites = require("../db/models/Favorites");
const User = require("../db/models/User");

const createFavorite = async (req, res) => {

    const { idUser } = req.query;
    const { id, name, gender, image, origin, status, species } = req.body;

    try {
        const user = await User.findByPk(idUser);
        if (!user) return res.status(400).json({ Error: "El usuario no existe" });

        const userSearch=await User.findByPk(idUser,{
            include:[{
                model:Favorites,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }
        ]});

        const userFavorites=userSearch.favorites;

        let bandera=false;
        for (let i = 0; i < userFavorites.length ; i++){
            if (userFavorites[i].dataValues.name.toLowerCase() === name.toLowerCase()){
                bandera=true;
                i = userFavorites.length;
            }
        }

        if (bandera) return res.status(400).json({ error:"El favorito ya esta agregado!"})
        
        const favorite = await Favorites.create({ name, status, image, species ,gender, origin});
        favorite.addUser(idUser);
        res.status(200).send(favorite);

    } catch (error) {
        res.status(400).json({ error: error.messege });
    }
}

module.exports = createFavorite;