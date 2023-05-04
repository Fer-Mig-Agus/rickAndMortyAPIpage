

import {
    GET_ALL_CHARACTERS,
    GENERATE_COPY,
    GET_CHARACTER_BY_NAME,
    GET_USER, GET_ALL_FAVORITES,
    FILTER_ORDER_BY_NAME,
    FILTER_ORDER_BY_ID,
    FILTER_BY_LIVE,
    FILTER_BY_GENDER
} from "./actions"

const initialState = {
    characters: [],
    copyCharacters: [],
    favorites: [],
    user: 0,
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
            return {
                ...state,
                copyCharacters: action.payload
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload.id
            }

        case GET_ALL_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            }
        case FILTER_ORDER_BY_NAME:


            switch (action.payload) {
                case "ascendente":
                    return {
                        ...state,
                        copyCharacters: [
                            ...state.copyCharacters.sort(function (a, b) {
                                return a.name.localeCompare(b.name)
                            }),
                        ]
                    }
                case "descendente":
                    return {
                        ...state,
                        copyCharacters: [
                            ...state.copyCharacters.sort(function (a, b) {
                                return b.name.localeCompare(a.name)
                            }),
                        ]
                    }
                default:
                    return {
                        ...state,
                        copyCharacters: state.characters
                    }
            }


        case FILTER_ORDER_BY_ID:

            switch (action.payload) {
                case "ascendente":
                    return {
                        ...state,
                        copyCharacters: [
                            ...state.copyCharacters.sort(function (a, b) {
                                return a.id > b.id
                            }),
                        ]
                    }
                case "descendente":
                    return {
                        ...state,
                        copyCharacters: [
                            ...state.copyCharacters.sort(function (a, b) {
                                return b.id > a.id
                            }),
                        ]
                    }
                default:
                    return {
                        ...state,
                        copyCharacters: state.characters
                    }
            }

        case FILTER_BY_LIVE:

            switch (action.payload) {
                case "alive":
                    return {
                        ...state,
                        copyCharacters: 
                            state.copyCharacters.filter((char) => char.status.toLowerCase() === "alive"),
                        
                    }
                case "dead":
                    return {
                        ...state,
                        copyCharacters:
                            state.copyCharacters.filter((char) => char.status.toLowerCase() === "dead"),

                    }
                case "unknown":
                    return {
                        ...state,
                        copyCharacters:
                            state.copyCharacters.filter((char) => char.status.toLowerCase() === "unknown"),

                    }
                default:
                    return {
                        ...state,
                        copyCharacters: state.characters
                    }
            }

        case FILTER_BY_GENDER:
            switch (action.payload) {
                case "hombre":
                    return {
                        ...state,
                        copyCharacters:
                            state.copyCharacters.filter((char) => char.gender.toLowerCase() === "male"),

                    }
                case "mujer":
                    return {
                        ...state,
                        copyCharacters:
                            state.copyCharacters.filter((char) => char.gender.toLowerCase() === "female"),

                    }
                case "unknown":
                    return {
                        ...state,
                        copyCharacters:
                            state.copyCharacters.filter((char) => char.gender.toLowerCase() === "unknown"),

                    }
                default:
                    return {
                        ...state,
                        copyCharacters: state.characters
                    }
            }

         


        default: return { ...state }
    }
}