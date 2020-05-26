import { SET_SERVERADDRESS } from '../../constants/action-types';

function setServerAddress(serverAddress) {
    return { type: SET_SERVERADDRESS, serverAddress};
}

export default setServerAddress;