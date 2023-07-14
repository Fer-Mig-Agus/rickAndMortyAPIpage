const { Router } = require("express");

//Aqui importamos todos los controladores
const router = Router();

const registerUser = require("../controllers/user/registerUser.controller");
const login = require("../controllers/user/login.controller");
const confimarToken = require("../controllers/user/confimarToken.controller");
const googleLogin = require("../controllers/user/googleLogin.controller");
const olvidatePassword = require("../controllers/user/olvidatePassword.controller");
const comprobarToken = require("../controllers/user/comprobarToken.controller");
const newPasswordUser = require("../controllers/user/newPasswordUser.controller");
const getAllUser = require("../controllers/user/getAllUser.controller");
const getUserById = require("../controllers/user/getUserById.controller");

router.post("/register", registerUser);

router.post("/login", login);

router.get("/confirmar/:token", confimarToken);

router.post("/google/login", googleLogin);

router.get("/google/login_success", googleLogin);

router.post("/olvidate_password", olvidatePassword);

router.route("/olvidate_password/:token").get(comprobarToken).post(newPasswordUser);

router.get("/", getAllUser);

router.get("/:id", getUserById);








module.exports = router;