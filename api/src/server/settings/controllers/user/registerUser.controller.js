const bcrypt = require("bcrypt");
const generarIdToken = require("../../helper/user/generarIdToken");
const { User } = require("../../../../db/models/relationShips");
const { emailRegistro } = require("../../helper/user/email");


const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, date_birth, email, password } = req.body;

        //Valido que el usuario tenga mas de 18 años
        let fechaNacimiento = new Date(date_birth);
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
        let dia = fechaActual.getDate() - fechaNacimiento.getDate();
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }
        if (edad < 18) {
            return res.status(406).json({ status: 406, error: "Debe ser mayor de edad" });
        }

        //Verificamos si ya existe el usuario con el mismo correo
        const emailVerify = await User.findOne({
            where: {
                email: email
            }
        })

        // Si el usuario ya existe, retornamos un error
        if (emailVerify) {
            return res.status(406).json({ status: 406, error: "El email ya está registrado" });
        }

        //Hashear la contraseña
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        //Creamos el usuario en la base de datos
        const user = new User({
            first_name,
            last_name,
            date_birth,
            email,
            email,
            password: hashedPassword,
        });

        //Generamos el token
        user.token = generarIdToken();

        //Guardamos el usuario en la BDD con el token
        await user.save();
        //Enviamos el correo de verificacion
        await emailRegistro(user);

        //Informamos al usuario de revisar el correo
        res.status(201).json({ status: 201, message: "Usuario registrado correctamente, revisa el correo" });

    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
}

module.exports = registerUser;
