//Generamos el token de autenticacion de usuario

const generarIdToken=()=>{
    const ramdom=Math.random().toString(32).substring(2);
    const fecha=Date.now().toString(32);
    return ramdom+fecha;
}


module.exports=generarIdToken;