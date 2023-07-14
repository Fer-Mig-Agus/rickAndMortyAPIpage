const bcrypt = require("bcrypt");
const { User } = require("../../../../db/models/relationShips");
const { generarJWT } = require("../../helper/user/generarJWT");


const login = async (req, res) => {
    console.log("entro a la funcion");
    try {
        //Tomamos los datos del body
        const { email, password } = req.body;
        //Buscamos al usuario por el email
        const user = await User.findOne({
            where: { email: email }
        });

        if (!user) return res.status(404).json({ status: 404, error: "No existe el usuario" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(404).json({ status: 404, error: "Contraseña incorrecta" });

        console.log("user: ", user)
        if (!user.accountConfirmed) return res.status(403).json({ status: 403, error: "Cuenta no confimada" });

        res.status(200).json({
            status: 200,
            message: "Usuario permitido",
            data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                date_birth: user.date_birth,
                email: user.email,
                token: generarJWT(user.id),
                profile_picture: user.profile_picture,
            }
        });

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

module.exports = login;