import { SET_FIRSTNAME, SET_LASTNAME, SET_USERNAME, SET_EMAIL, SET_LOGINTOKEN } from '../constants/action-types';

const initialState = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    loginToken: null,
};

const userReducer = (state = initialState, action) => {
    if (action.type === SET_FIRSTNAME) {
        return Object.assign({}, state, {
            firstName: action.firstName, 
            lastName: state.lastName, 
            username: state.username, 
            email: state.email, 
            loginToken: state.loginToken 
        });
    }
    
    if (action.type === SET_LASTNAME) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: action.lastName, 
            username: state.username, 
            email: state.email, 
            loginToken: state.loginToken 
        });
    }

    if (action.type === SET_USERNAME) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: action.username, 
            email: state.email, 
            loginToken: state.loginToken 
        });
    }

    if (action.type === SET_EMAIL) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: state.username,
            email: action.email, 
            loginToken: state.loginToken 
        });
    }

    if (action.type === SET_LOGINTOKEN) {
        return Object.assign({}, state, {
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: state.username,
            email: state.email, 
            loginToken: action.loginToken 
        });
    }


    return state;
}

export default userReducer;