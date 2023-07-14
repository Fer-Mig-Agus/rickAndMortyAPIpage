const { Router } = require("express");

//Aqui importamos todos los controladores

const AllCharacters = require("../controllers/characters/AllCharacters.controller");
const OneCharacter = require("../controllers/characters/OneCharacter.controller");
const OneCharacterName = require("../controllers/characters/OneCharacterName.controller");
const router = Router();


//important: Esta ruta me traera todos los personajes

router.get("/", AllCharacters);

//important: Esta ruta me traera todos los personajes que contenga un nombre

router.get("/search", OneCharacterName);

//important: Esta ruta me traera los personajes por el ID

router.get("/:id", OneCharacter);





module.exports = router;