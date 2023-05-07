

export const validate=(form,errorState)=>{

    
    const error = { ...errorState };

    if(!form.email) error.email="Completa el campo";
    else if(form.email === "") error.email="Completa el campo";
    else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) error.email="No es un email valido";
    else if(form.email.length >= 35) error.email="Supera los caracteres permitidos";
    else error.email="";



    if(!form.password) error.password="Completa el campo";
    else if(form.password === "") error.password="Completa el campo";
    else if (!form.password.match(/\d/)) error.password = "Debe tener al menos un numero";
    else if (form.password.length < 6 || form.password.length > 10) error.password="Debe tener entre 6 y 10 caracteres";
    else error.password="";

    return error;
}


export const validateFields=({email,password})=>{

    if (!email) return false
    else if (email === "") return false
    else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email)) return false
    else if (email.length >= 35) return false
    if (!password) return false
    else if (password === "") return false
    else if (!password.match(/\d/)) return false
    else if (password.length < 6 || password.length > 10) return false

    return true;

}
