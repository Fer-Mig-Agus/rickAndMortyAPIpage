const bcrypt = require("bcrypt");
require("dotenv").config();
const { User } = require("../../../../db/models/relationShips");
const { generarJWT } = require("../../helper/user/generarJWT");


const googleLogin = async (req, res) => {
    const { given_name, family_name, picture, email } = req.body;
    console.log("datos que llegan desde body: ", req.body);
    let newUser;
    try {
        console.log("Si el email existe entra al if");
        if (email) {
            console.log("Entro al if");
            let user = await User.findOne({ where: { email } });
            console.log("Usuario encontrado: ", user);
            if (!user) {
                console.log("Si el usuario no existe lo crea")
                const password = email + process.env.JWT_SECRET;
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(password, salt);

                newUser = await User.create({
                    first_name: given_name,
                    last_name: family_name,
                    profile_picture: picture,
                    email: email,
                    password: hashedPassword,
                    token: "",
                    createGoogle: true,
                    accountConfirmed: true,
                });
                console.log("Usuario creado: ", newUser);
                res.status(201).json({
                    status: 201, message: "Usuario creado correctamente", data: {
                        id: newUser.id,
                        first_name: newUser.first_name,
                        last_name: newUser.last_name,
                        date_birth: newUser.date_birth,
                        email: newUser.email,
                        token: generarJWT(newUser.id),
                        profile_picture: newUser.profile_picture,
                    }
                })
            } else {
                res.status(201).json({
                    status: 201, message: "Usuario ya está creado", data: {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        date_birth: user.date_birth,
                        email: user.email,
                        token: generarJWT(user.id),
                        profile_picture: user.profile_picture,
                    }
                })
            }


        } else {
            return res.status(400).json({ status: 400, error: "Email inválido" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = googleLogin;