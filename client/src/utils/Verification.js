

export const validate = (form, errorState) => {


    const error = { ...errorState };

    if (!form.first_name) error.first_name = "Completa el campo";
    else if (form.first_name === "") error.first_name = "Completa el campo";
    else if (!isNaN(form.first_name)) error.first_name = "No debe ser un numero";
    else error.first_name = "";

    if (!form.last_name) error.last_name = "Completa el campo";
    else if (form.last_name === "") error.last_name = "Completa el campo";
    else if (!isNaN(form.last_name)) error.last_name = "No debe ser un numero";
    else error.last_name = "";

    if (!form.email) error.email = "Completa el campo";
    else if (form.email === "") error.email = "Completa el campo";
    else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) error.email = "No es un email valido";
    else if (form.email.length >= 35) error.email = "Supera los caracteres permitidos";
    else error.email = "";

    if (!form.password) error.password = "Completa el campo";
    else if (form.password === "") error.password = "Completa el campo";
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
    if (!passwordRegex.test(form.password)) error.password = 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número.';
    else error.password = "";

    return error;
}


export const validateFields = ({ first_name, last_name, date_birth, email, password }) => {
    if (!first_name || first_name === "" || !isNaN(first_name)) return false
    if (!last_name || last_name === "" || !isNaN(last_name)) return false
    if (!date_birth || date_birth === "") return false
    if (!email || email === "") return false
    if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email)) return false
    if (email.length >= 35) return false
    if (!password || password === "") return false
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
    if (!passwordRegex.test(password)) return false;

    return true;
}
