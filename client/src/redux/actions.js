
import axios from "axios";
//const URL_BASE="http://localhost:3001";



export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GENERATE_COPY = "GENERATE_COPY";
export const SET_USER = "SET_USER";
export const GET_ALL_FAVORITES ="GET_ALL_FAVORITES";
export const DETAIL_ID ="DETAIL_ID";
export const CLEAN_DETAIL_BY_ID ="CLEAN_DETAIL_BY_ID";
export const SET_ACCESS ="SET_ACCESS";
//Variables de Filtros
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME";
export const FILTER_ORDER_BY_NAME ="FILTER_ORDER_BY_NAME";
export const FILTER_ORDER_BY_ID ="FILTER_ORDER_BY_ID";
export const FILTER_BY_LIVE ="FILTER_BY_LIVE";
export const FILTER_BY_GENDER ="FILTER_BY_GENDER";



export const getAllCharacters = () => {
    return async function (dispatch) {
        const characters = await axios.get(`/characters`);
        dispatch({ type: GET_ALL_CHARACTERS, payload: characters.data });
    }
}

export const generateCopy = () => {
    return { type: GENERATE_COPY }
}


export const setUser = (user) => {
    return({ type: SET_USER, payload: user})
}

export const setAccess=(acceso)=>{
    return {type: SET_ACCESS, payload:acceso}
}

export const getAllFavorites=(idUser)=>{
    return async function (dispatch){
        const favorites = await axios.get(`/favorite?idUser=${idUser}`);
        dispatch({type: GET_ALL_FAVORITES,payload:favorites.data});
    }
}

export const detailById=(id)=>{
    return {type: DETAIL_ID, payload:id};
}

export const cleanDetailById=()=>{
    return {type: CLEAN_DETAIL_BY_ID}
}

//Todos los filtros

export const getCharacterByName = (name) => {
    return async function (dispatch) {
        const character = await axios.get(`/characters/names?name=${name}`);
        dispatch({ type: GET_CHARACTER_BY_NAME, payload: character.data });
    }
}

export const filterOrderByName=(order)=>{
    return {type: FILTER_ORDER_BY_NAME, payload:order}
}

export const filterOrderById=(order)=>{
    return {type:FILTER_ORDER_BY_ID,payload:order}
}

export const filterByLive=(live)=>{
    return {type: FILTER_BY_LIVE,payload:live}
}

export const filterByGender=(gender)=>{
    return {type: FILTER_BY_GENDER, payload:gender};
}