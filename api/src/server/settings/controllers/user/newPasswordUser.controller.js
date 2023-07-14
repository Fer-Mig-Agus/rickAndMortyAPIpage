const bcrypt = require("bcrypt");
const { User } = require("../../../../db/models/relationShips");

const newPasswordUser = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        const user = await User.findOne({ where: { token } });

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        user.password = hashedPassword;
        user.token = "";

        await user.save();
        res.status(204).json({ status: 204, message: "La contraseña se ha cambiado con exito" });

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = newPasswordUser;