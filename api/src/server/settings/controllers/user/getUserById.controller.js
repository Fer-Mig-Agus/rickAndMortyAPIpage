const { User } = require("../../../../db/models/relationShips");

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findAll(id);
        if (!user) return res.status(404).json({ status: 404, error: "Usuario no existente" });
        res.status(200).json({ status: 200, message: "Usuario encontrado", data: user });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}


module.exports = getUserById;