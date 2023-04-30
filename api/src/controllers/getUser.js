const User = require("../db/models/User");

const getUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) return res.status(400).json({ error: "No existe el Usuario" });
        if (password !== user.password) return res.status(400).json({ error: "Contraseña incorrecta" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.messege });
    }
}


module.exports = getUser;