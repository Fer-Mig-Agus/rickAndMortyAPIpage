const { User } = require("../../../../db/models/relationShips");

const comprobarToken = async (req, res) => {
    const { token } = req.params;

    const usuarioConfirmar = await User.findOne({
        where: { token }
    });

    if (!usuarioConfirmar) return res.status(409).json({ status: 409, error: "Token inválido" });

    res.status(200).json({ status: 200, message: "Token válido" });
}

module.exports = comprobarToken;