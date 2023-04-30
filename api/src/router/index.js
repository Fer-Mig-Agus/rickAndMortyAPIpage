const {Router}=require("express");

//Aqui importamos todos los controladores

const AllCharacters=require("../controllers/AllCharacters");
const OneCharacter=require("../controllers/OneCharacter");
const OneCharacterName=require("../controllers/OneCharacterName");
const createUser=require("../controllers/createUser");
const createFavorite=require("../controllers/createFavorite");
const getAllFavorites=require("../controllers/getAllFavorites");
const deleteFavorite=require("../controllers/deleteFavorite");
const getUser=require("../controllers/getUser");
const router=Router();


//important: Esta ruta me traera todos los personajes

router.get("/characters",AllCharacters);




//important: Esta ruta me traera todos los personajes que contenga un nombre

router.get("/characters/names", OneCharacterName);



//important: Esta ruta me traera los personajes por el ID

router.get("/characters/:id", OneCharacter);

//important: Esta ruta va a crear un nuevo usuario en la BDD
router.post("/user",createUser);

//important: Esta ruta va a buscar al usuario
router.get("/user",getUser);


//important: Esta ruta traera todos los favoritos de la BDD por el ID del usuario

router.get("/favorite", getAllFavorites);


//important: Esta ruta que me guardara un favorito en la BDD

router.post("/favorite",createFavorite);

//important: Esta ruta elimina un favorito en la BDD por ID
router.delete("/favorite/:id",deleteFavorite);




module.exports=router;