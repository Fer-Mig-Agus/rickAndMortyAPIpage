const nodemailer = require("nodemailer");
require("dotenv").config();

const emailRegistro = async (datos) => {
    const { email, first_name, last_name, token } = datos;
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    })



    contentHTML = `
    <div style="width: 700px; height: auto;  background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 30%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dgp4xwknu/image/upload/v1689348648/Rick%20and%20Morty%20Page/rick-and-morty-portal-shoes-white-clothing-zavvi-23_ay5j4z.png" title="Logo Rick and Morty"/>
            </div>
            <div style=" width: 65%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Confirmación de cuenta</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${first_name} ${last_name} somos el equipo de desarrolladores de Rick and Morty Web, se ha intentado iniciar sesión con este email ${email}, queremos comprobar la misma, por favor haz click en el boton. Si tu no solicitaste este email, puedes ignorar el mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: linear-gradient(180deg, rgb(20, 245, 0), rgb(208, 255, 0)); cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: black;" href="${process.env.FRONTEND_URL}/user/confirmar/${token}" target="_blank">Confirmar cuenta</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://portfolio-miguel-fernandez-v2.vercel.app/" target:"_blank" >Rick and Morty Web</a> </p>
        </div>
    </div>
    `;


    await transport.sendMail({
        from: ' "Rick and Morty web - Administrador de cuentas" <cuentas@rick_and_morty_oficial.com',
        to: email,
        subject: "Confirma tu cuenta",
        text: "Comprueba la cuenta de Rick and Morty web",
        html: `${contentHTML}`
    })


}




const emailOlvidatePassword = async (datos) => {
    const { email, first_name, last_name, token } = datos;
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    })

    contentHTML = `
    <div style="width: 700px; height: auto;  background: black; overflow:hidden; box-shadow: 1px 2px 5px white; border-radius: 30px; display: grid; grid-template-columns: 100%; grid-template-rows: 80% 20%; padding: 20px;">
        <div style="width: 100%; height: auto; display: flex; justify-content: center; align-items: center; gap: 20px;" >
            <div style=" width: 30%; height: 300px; overflow: hidden;">
                <img style="width: 100%; height: 100%;" src="https://res.cloudinary.com/dgp4xwknu/image/upload/v1689348648/Rick%20and%20Morty%20Page/rick-and-morty-portal-shoes-white-clothing-zavvi-23_ay5j4z.png" title="Logo Rick and Morty"/>
            </div>
            <div style=" width: 65%; height: auto; overflow: hidden; padding: 10px;">

                    <h1 style="color: white; font-size: 25px; text-align: center;">Confirmación de cuenta</h1>
                    <p style="text-align: center; font-size: 18px; font-family: Arial, Helvetica, sans-serif; color: white;">Hola ${first_name} ${last_name} somos el equipo de desarrolladores de Rick and Morty Web, se ha intentado reestablecer la contraseña con este email ${email}, para continuar con el proceso por favor haz click en el boton. Si tu no solicitaste este email, puedes ignorar el mensaje</p>

                    <div style="width: 97%; height: 50px; display: flex; justify-content: center; align-items: center;padding: 10px; border-radius: 5px; background: linear-gradient(180deg, rgb(20, 245, 0), rgb(208, 255, 0)); cursor: pointer;">
                        <a style="text-decoration: none; width: 97%;  height: 50px; line-height:50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: black;" href="${process.env.FRONTEND_URL}/reset_password_two/${token}" target="_blank">Reestablecer contraseña</a>
                    </div>
            </div>
                
        </div>
        <div style=" width: 95%; height: 50px; padding: 10px;">
            <p style="line-height: 50px; text-align: center; font-size: 20px; font-family: Arial, Helvetica, sans-serif; color: white;">&copy; Equipo de desarrollo de <a style="	text-decoration: none; font-size: 20px; color: rgb(49, 49, 247); font-family: Arial, Helvetica, sans-serif;" href="https://portfolio-miguel-fernandez-v2.vercel.app/" target:"_blank" >Rick and Morty Web</a> </p>
        </div>
    </div>
    `;


    await transport.sendMail({
        from: ' "Rick and Morty web - Administrador de cuentas" <cuentas@rick_and_morty_oficial.com',
        to: email,
        subject: "Rick and Morty - Reestablece tu contraseña",
        text: "Reestablece tu contraseña",
        html: `${contentHTML}`
    })


}



module.exports = {
    emailRegistro,
    emailOlvidatePassword
}