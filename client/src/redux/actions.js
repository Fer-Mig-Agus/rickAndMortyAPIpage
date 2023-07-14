
import axios from "axios";
//const URL_BASE="http://localhost:3001";



export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GENERATE_COPY = "GENERATE_COPY";

export const SAVE_USER = "SAVE_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";

export const DETAIL_ID = "DETAIL_ID";
export const CLEAN_DETAIL_BY_ID = "CLEAN_DETAIL_BY_ID";


//Variables de Filtros
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME";
export const FILTER_ORDER_BY_NAME = "FILTER_ORDER_BY_NAME";
export const FILTER_ORDER_BY_ID = "FILTER_ORDER_BY_ID";
export const FILTER_BY_LIVE = "FILTER_BY_LIVE";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";



export const getAllCharacters = () => {
    return async function (dispatch) {
        const characters = await axios.get(`/characters`);
        dispatch({ type: GET_ALL_CHARACTERS, payload: characters.data });
    }
}

export const generateCopy = () => {
    return { type: GENERATE_COPY }
}


export const saveUser = (user) => {
    return ({ type: SAVE_USER, payload: user })
}

export const logOutUser = () => {
    return { type: LOG_OUT_USER }
}

export const getAllFavorites = (idUser) => {
    return async function (dispatch) {
        const { data } = await axios.get(`/favorite?idUser=${idUser}`);
        dispatch({ type: GET_ALL_FAVORITES, payload: data.data });
    }
}

export const detailById = (id) => {
    return { type: DETAIL_ID, payload: id };
}

export const cleanDetailById = () => {
    return { type: CLEAN_DETAIL_BY_ID }
}

//Todos los filtros

export const getCharacterByName = (name) => {
    return { type: GET_CHARACTER_BY_NAME, payload: name }
    // return async function (dispatch) {
    //     const character = await axios.get(`/characters/names?name=${name}`);
    //     dispatch({ type: GET_CHARACTER_BY_NAME, payload: character.data });
    // }
}

export const filterOrderByName = (order) => {
    return { type: FILTER_ORDER_BY_NAME, payload: order }
}

export const filterOrderById = (order) => {
    return { type: FILTER_ORDER_BY_ID, payload: order }
}

export const filterByLive = (live) => {
    return { type: FILTER_BY_LIVE, payload: live }
}

export const filterByGender = (gender) => {
    return { type: FILTER_BY_GENDER, payload: gender };
}