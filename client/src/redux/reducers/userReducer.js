import config from '../../config.json';
import { SET_FIRSTNAME, SET_LASTNAME, SET_NICKNAME, SET_EMAIL, SET_LOGINTOKEN } from '../constants/action-types';

const initialState = {
    server: {
        address: config.server,
    },
    user: {
        firstName: null,
        lastName: null,
        nickname: null,
        email: null,
        loginToken: null,
    },
};

function userReducer(state = initialState, action) {
    if (action.type === SET_FIRSTNAME) {
        return Object.assign({}, state, {
            user: { 
                firstName: action.firstName, 
                lastName: state.user.lastName, 
                nickname: state.user.nickname, 
                email: state.user.email, 
                loginToken: state.user.loginToken 
            },
        });
    }
    
    if (action.type === SET_LASTNAME) {
        return Object.assign({}, state, {
            user: { 
                firstName: state.user.firstName, 
                lastName: action.lastName, 
                nickname: state.user.nickname, 
                email: state.user.email, 
                loginToken: state.user.loginToken 
            },
        });
    }

    if (action.type === SET_NICKNAME) {
        return Object.assign({}, state, {
            user: { 
                firstName: state.user.firstName, 
                lastName: state.user.lastName, 
                nickname: action.nickname, 
                email: state.user.email, 
                loginToken: state.user.loginToken 
            },
        });
    }

    if (action.type === SET_EMAIL) {
        return Object.assign({}, state, {
            user: { 
                firstName: state.user.firstName, 
                lastName: state.user.lastName, 
                nickname: state.user.nickname,
                email: action.email, 
                loginToken: state.user.loginToken 
            },
        });
    }

    if (action.type === SET_LOGINTOKEN) {
        return Object.assign({}, state, {
            user: { 
                firstName: state.user.firstName, 
                lastName: state.user.lastName, 
                nickname: state.user.nickname,
                email: state.user.email, 
                loginToken: action.loginToken 
            },
        });
    }


    return state;
}

export default userReducer;