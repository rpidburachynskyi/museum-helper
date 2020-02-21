import { WAITING, NOT_WAITING } from '../constants';
import { REGISTER_IN_PENDING, REGISTER_IN_SUCCESS, REGISTER_IN_ERROR } from '../actions/registerActions';

const initState = {
    waiting: NOT_WAITING,
    error: null,
    registered: false,
    verifyLink: "" // FIXIT
}

const registerReducer = (state = initState, action) => {
    switch(action.type) {
        case REGISTER_IN_PENDING: {
            return {
                ...state,
                waiting: WAITING
            }
        }
        case REGISTER_IN_SUCCESS: {
            const { verifyLink } = action;
            return {
                ...state,
                error: null,
                registered: true,
                waiting: NOT_WAITING,
                verifyLink
            }
        }
        case REGISTER_IN_ERROR: {
            const { error } = action;
            return {
                ...state,
                waiting: NOT_WAITING,
                error
            }
        }

        default: return state;
    }
};

export default registerReducer;