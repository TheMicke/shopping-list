import { SET_FIRSTNAME, SET_LASTNAME, SET_NICKNAME, SET_EMAIL, SET_LOGINTOKEN } from '../constants/action-types';

const initialState = {
    firstName: null,
    lastName: null,
    nickname: null,
    email: null,
    loginToken: null,
};

const userReducer = (state = initialState, action) => {
    if (action.type === SET_FIRSTNAME) {
        return Object.assign({}, state, {
            firstName: action.firstName, 
            lastName: state.lastName, 
            nickname: state.nickname, 
            email: state.email, 
            loginToken: state.loginToken 
        });
    }
    
    if (action.type === SET_LASTNAME) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: action.lastName, 
            nickname: state.nickname, 
            email: state.email, 
            loginToken: state.loginToken 
        });
    }

    if (action.type === SET_NICKNAME) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: state.lastName, 
            nickname: action.nickname, 
            email: state.email, 
            loginToken: state.loginToken 
        });
    }

    if (action.type === SET_EMAIL) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: state.lastName, 
            nickname: state.nickname,
            email: action.email, 
            loginToken: state.loginToken 
        });
    }

    if (action.type === SET_LOGINTOKEN) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: state.lastName, 
            nickname: state.nickname,
            email: state.email, 
            loginToken: action.loginToken 
        });
    }


    return state;
}

export default userReducer;