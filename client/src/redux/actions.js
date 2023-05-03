
import axios from "axios";
//const URL_BASE="http://localhost:3001";



export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GENERATE_COPY = "GENERATE_COPY";
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME";
export const GET_USER = "GET_USER";
export const GET_ALL_FAVORITES ="GET_ALL_FAVORITES";


export const getAllCharacters = () => {
    return async function (dispatch) {
        const characters = await axios.get(`/characters`);
        dispatch({ type: GET_ALL_CHARACTERS, payload: characters.data });
    }
}

export const generateCopy = () => {
    return { type: GENERATE_COPY }
}

export const getCharacterByName = (name) => {
    return async function (dispatch) {
        const character = await axios.get(`/characters/names&name=${name}`);
        dispatch({ type: GET_CHARACTER_BY_NAME, payload: character.data });
    }
}

export const getUser = (user) => {
    return({ type: GET_USER, payload: user})
}

export const getAllFavorites=(IdUser)=>{
    return async function (dispatch){
        const favorites=await axios.get(`/favorite`,IdUser);
        dispatch({type: GET_ALL_FAVORITES,payload:favorites.data});
    }
}

