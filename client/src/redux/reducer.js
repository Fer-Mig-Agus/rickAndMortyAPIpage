

import {
    GET_ALL_CHARACTERS,
    GENERATE_COPY,
    GET_CHARACTER_BY_NAME,
    GET_ALL_FAVORITES,
    LOG_OUT_USER,
    DETAIL_ID,
    SAVE_USER,
    CLEAN_DETAIL_BY_ID,
    FILTER_ORDER_BY_NAME,
    FILTER_ORDER_BY_ID,
    FILTER_BY_LIVE,
    FILTER_BY_GENDER
} from "./actions"

const initialState = {
    characters: [],
    copyCharacters: [],
    favorites: [],
    detail: {},
    user: {},
}

const setLocalStorageUser = (user) => {
    try {
        window.localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
        console.log(error.message);
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER:
            setLocalStorageUser(action.payload);
            return {
                ...state,
                user: action.payload
            }
        case LOG_OUT_USER:
            setLocalStorageUser({});
            return {
                ...state,
                user: {}
            }
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
                copyCharacters: state.characters.filter((char) => char.name.toLowerCase().includes(action.payload.toLowerCase()))
            }

        case GET_ALL_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
            }
        case DETAIL_ID:
            return {
                ...state,
                detail: state.characters.find((char) => char.id == action.payload)
            }
        case CLEAN_DETAIL_BY_ID:
            return {
                ...state,
                detail: {}
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
                        copyCharacters: state.copyCharacters
                    }

            }



        case FILTER_ORDER_BY_ID:

            switch (action.payload) {
                case "ascendente":
                    return {
                        ...state,
                        copyCharacters: [
                            ...state.copyCharacters.sort((a, b) => a.id - b.id)
                        ]
                    }
                case "descendente":
                    return {
                        ...state,
                        copyCharacters: [
                            ...state.copyCharacters.sort((a, b) => b.id - a.id)
                        ]
                    }
                default:
                    return {
                        ...state,
                        copyCharacters: state.copyCharacters
                    }
            }


        case FILTER_BY_LIVE:

            switch (action.payload) {
                case "alive":
                    return {
                        ...state,
                        copyCharacters:
                            state.characters.filter((char) => char.status.toLowerCase() === "alive"),

                    }
                case "dead":
                    return {
                        ...state,
                        copyCharacters:
                            state.characters.filter((char) => char.status.toLowerCase() === "dead"),

                    }
                case "unknown":
                    return {
                        ...state,
                        copyCharacters:
                            state.characters.filter((char) => char.status.toLowerCase() === "unknown"),

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
                            state.characters.filter((char) => char.gender.toLowerCase() === "male"),

                    }
                case "mujer":
                    return {
                        ...state,
                        copyCharacters:
                            state.characters.filter((char) => char.gender.toLowerCase() === "female"),

                    }
                case "unknown":
                    return {
                        ...state,
                        copyCharacters:
                            state.characters.filter((char) => char.gender.toLowerCase() === "unknown"),

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