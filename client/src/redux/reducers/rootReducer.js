import { combineReducers } from 'redux';
import serverReducer from './serverReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({ 
    server: serverReducer, 
    user: userReducer 
});


export default rootReducer;
