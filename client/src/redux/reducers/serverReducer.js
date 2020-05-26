import config from '../../config.json';
import { SET_SERVERADDRESS } from '../constants/action-types';
import setServerAddress from '../actions/server/setServerAddress';

const initialState = {
    address: config.server,
};

const serverReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SERVERADDRESS :
            return Object.assign({}, state, {
                address: action.serverAddress
            });
            
        default:
            return state;
    }
}

export default serverReducer;
