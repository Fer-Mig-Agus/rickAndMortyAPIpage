
const { User, Favorite } = require("../../../../db/models/relationShips");

const createFavorite = async (req, res) => {

    const { idUser } = req.query;
    const { id, name, gender, image, origin, status, species } = req.body;

    console.log("entro a la funcion")
    console.log("Id del usuario:", idUser);
    console.log("Datos del personaje:", req.body)
    try {
        console.log("Busca el usuario")
        const user = await User.findByPk(idUser);
        console.log("Usuario encontrado:", user);
        if (!user) return res.status(404).json({ status: 404, error: "El usuario no existe" });
        console.log("paso la valid sccmsfbg gbxgbxacion del usuario");
        const favoritesOfUser = await Favorite.findAll({ where: { idUser } });
        console.log("Estos son los favoritos:", favoritesOfUser);
        let bandera = false;
        for (let i = 0; i < favoritesOfUser.length; i++) {
            if (favoritesOfUser[i].name.toLowerCase() === name.toLowerCase()) {
                bandera = true;
                i = favoritesOfUser.length;
            }
        }

        if (bandera) return res.status(409).json({ status: 409, error: "El favorito ya esta agregado!" })

        console.log("paso la validacion de la busqueda");
        const favorite = await Favorite.create({
            idUser,
            id,
            name,
            status,
            image,
            species,
            gender,
            origin
        });
        console.log("se creo el favorito: ", favorite);
        res.status(201).json({ status: 201, message: "Favorito agregado con éxito.", data: favorite });

    } catch (error) {
        console.log("paso por aqui:", error);
        res.status(500).json({ status: 500, error: error.messege });
    }
}

module.exports = createFavorite;