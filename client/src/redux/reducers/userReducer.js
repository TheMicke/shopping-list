import { SET_FIRSTNAME, SET_LASTNAME, SET_USERNAME, SET_EMAIL, SET_ACCESSTOKEN, SET_USERID } from '../constants/action-types';

const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    accessToken: null,
};

const userReducer = (state = initialState, action) => {
    if (action.type === SET_USERID) {
        return Object.assign({}, state, {
            id: action.id,
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: state.username, 
            email: state.email, 
            accessToken: state.accessToken 
        });
    }

    if (action.type === SET_FIRSTNAME) {
        return Object.assign({}, state, {
            id: state.id,
            firstName: action.firstName, 
            lastName: state.lastName, 
            username: state.username, 
            email: state.email, 
            accessToken: state.accessToken 
        });
    }
    
    if (action.type === SET_LASTNAME) {
        return Object.assign({}, state, {
            id: state.id,
            firstName: state.firstName, 
            lastName: action.lastName, 
            username: state.username, 
            email: state.email, 
            accessToken: state.accessToken 
        });
    }

    if (action.type === SET_USERNAME) {
        return Object.assign({}, state, {
            id: state.id,
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: action.username, 
            email: state.email, 
            accessToken: state.accessToken 
        });
    }

    if (action.type === SET_EMAIL) {
        return Object.assign({}, state, {
            id: state.id,
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: state.username,
            email: action.email, 
            accessToken: state.accessToken 
        });
    }

    if (action.type === SET_ACCESSTOKEN) {
        return Object.assign({}, state, {
            id: state.id,
            firstName: state.firstName, 
            lastName: state.lastName, 
            username: state.username,
            email: state.email, 
            accessToken: action.accessToken 
        });
    }


    return state;
}

export default userReducer;