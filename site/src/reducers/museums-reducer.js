import { NOT_LOADED, IS_LOADING, LOADED, ERROR_LOADING } from "../constants";
import { LOAD_MUSEUMS_PENDING, LOAD_MUSEUMS_SUCCESS, LOAD_MUSEUMS_FAIL, ADD_MUSEUM_SUCCESS, REMOVE_MUSEUM_SUCCESS, REMOVE_MUSEUM_FAIL } from "../actions/museumsActions";
import { CHANGE_MUSEUM_DATA_SUCCESS } from "../actions/museumActions";

const initState = {
    error: null,
    loading: NOT_LOADED,
    museums: []
};

export const museumsReducer = (state = initState, action) => {

    switch(action.type) {

        case LOAD_MUSEUMS_PENDING: {

            return {
                ...state,
                loading: IS_LOADING,
            };
        }

        case LOAD_MUSEUMS_SUCCESS: {
            const { museums } = action;

            return {
                ...state,
                loading: LOADED,
                museums
            };
        }

        case LOAD_MUSEUMS_FAIL: {
            const { error } = action;
            return {
                ...state,
                loading: LOADED,
                error
            };
        }

        case ADD_MUSEUM_SUCCESS: {
            const { museums } = state;
            const { addedMuseum } = action;

            return {
                ...state,
                museums: museums.concat([addedMuseum])
            };
        }

        case REMOVE_MUSEUM_SUCCESS: {
            const { museums } = state;
            const { id } = action;
            return {
                ...state,
                museums: museums.filter(m => m.id !== id)
            }
        }

        case REMOVE_MUSEUM_FAIL: {
            return {
                ...state
            }
        }

        case CHANGE_MUSEUM_DATA_SUCCESS: {
            const { museums } = state;
            const { id, changes } = action;

            const newMuseums = museums.filter(() => true);
            const key = Object.keys(changes)[0];
            newMuseums.find(m => m.id === id)[key] = changes[key];

            return { 
                ...state,
                museums: newMuseums
            }
        }

        default: return state;
    }
}