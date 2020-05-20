import config from '../../config.json';
import { SET_NICKNAME, SET_EMAIL, SET_LOGINTOKEN } from '../constants/action-types';

const initialState = {
    server: {
        address: config.server,
    },
    user: {
        nickname: null,
        email: null,
        loginToken: null,
    },
};

function userReducer(state = initialState, action) {
    if (action.type === SET_NICKNAME) {
        return Object.assign({}, state, {
            user: { nickname: action.nickname, email: state.user.email, loginToken: state.user.loginToken },
        });
    }

    if (action.type === SET_EMAIL) {
        return Object.assign({}, state, {
            user: { nickname: state.user.nickname, email: action.email, loginToken: state.user.loginToken },
        });
    }

    if (action.type === SET_LOGINTOKEN) {
        return Object.assign({}, state, {
            user: { nickname: state.user.nickname, email: state.user.email, loginToken: action.loginToken },
        });
    }


    return state;
}

export default userReducer;