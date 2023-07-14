const bcrypt = require("bcrypt");
require("dotenv").config();
const { User } = require("../../../../db/models/relationShips");
const { generarJWT } = require("../../helper/user/generarJWT");


const googleLogin = async (req, res) => {
    const { given_name, family_name, picture, email } = req.body;
    try {

        if (email) {
            let user = await User.findOne({ where: { email } });
            if (!user) {
                const password = email + processl.env.JWT_SECRET;
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(password, salt);

                const newUser = new User({
                    first_name: given_name,
                    last_name: family_name,
                    profile_picture: picture,
                    email: email,
                    password: hashedPassword,
                    token: "",
                    createGoogle: true,
                    accountConfirmed: true,
                });
                user = await newUser.save();
            }

            res.status(200).json({
                status: 200, message: "Usuario creado correctamente", data: {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    date_birth: user.date_birth,
                    email: user.email,
                    token: generarJWT(user.id),
                    profile_picture: user.profile_picture,
                }
            })
        } else {
            return res.status(400).json({ status: 400, error: "Email inválido" })
        }

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = googleLogin;