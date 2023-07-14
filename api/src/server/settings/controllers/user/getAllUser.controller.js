const { User } = require("../../../../db/models/relationShips");

const getAllUser = async (req, res) => {

    try {
        const users = await User.findAll();
        if (!users || users.length === 0) return res.status(404).json({ status: 404, error: "No hay usuarios registrados" });
        res.status(200).json({ status: 200, message: "Estos son los usuarios encontrados", data: users });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}


module.exports = getAllUser;