const { Router } = require("express");

//Aqui importamos todos los controladores

const createFavorite = require("../controllers/favorite/createFavorite.controller");
const getAllFavorites = require("../controllers/favorite/getAllFavorites.controller");
const deleteFavorite = require("../controllers/favorite/deleteFavorite.controller");
const router = Router();




//important: Esta ruta traera todos los favoritos de la BDD por el ID del usuario

router.get("/", getAllFavorites);

//important: Esta ruta que me guardara un favorito en la BDD

router.post("/", createFavorite);

//important: Esta ruta elimina un favorito en la BDD por ID
router.delete("/:id", deleteFavorite);




module.exports = router;