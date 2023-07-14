const { User } = require("../../../../db/models/relationShips");

const confimarToken = async (req, res) => {
    console.log("entro al confirmar")
    const { token } = req.params;
    console.log("token:", token)
    if (!token || token === "") return res.status(409).json({ status: 409, error: "No existe el token" })
    const usuario = await User.findOne({ where: { token } });
    if (!usuario) return res.status(403).json({ status: 403, error: "Token inválido" });

    try {
        await usuario.update({
            accountConfirmed: true,
            token: "",
        })

        res.status(200).json({ status: 200, message: "Usuario confirmado con éxito" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = confimarToken;