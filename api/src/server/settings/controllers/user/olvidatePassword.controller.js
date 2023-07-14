const { User } = require("../../../../db/models/relationShips");
const { emailOlvidatePassword } = require("../../helper/user/email");
const generarIdToken = require("../../helper/user/generarIdToken");

const olvidatePassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json({ status: 404, error: "No existe el email ingresado" });

        user.token = generarIdToken();

        await user.save();

        emailOlvidatePassword(user);

        res.status(200).json({ status: 200, message: "Hemos enviado un correor electronico con las indicaciones a seguir" });

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = olvidatePassword;