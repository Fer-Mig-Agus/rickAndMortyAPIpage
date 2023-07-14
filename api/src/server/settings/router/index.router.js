const { Router } = require("express");

//Aqui importamos todos los controladores
const router = Router();

const userRoutes = require("./user.router");
const charactersRoutes = require("./characters.router");
const favoriteRoutes = require("./favorite.router");

router.use("/characters", charactersRoutes);

router.use("/user", userRoutes);

router.use("/favorite", favoriteRoutes);

module.exports = router;