

import { GET_ALL_CHARACTERS,GENERATE_COPY, GET_CHARACTER_BY_NAME, GET_USER, GET_ALL_FAVORITES } from "./actions"

const initialState = {
    characters: [],
    copyCharacters: [],
    favorites: [],
    user:0,
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
            
        case GENERATE_COPY:
            return {
                ...state,
                copyCharacters: state.characters
            }

        case GET_CHARACTER_BY_NAME:
            return{
                ...state,
                copyCharacters:action.payload
            }

        case GET_USER:
            return{
                ...state,
                user:action.payload.id
            }
            
        case GET_ALL_FAVORITES:
            return{
                ...state,
                favorites:action.payload,
            }
    
        default: return { ...state }
    }
}