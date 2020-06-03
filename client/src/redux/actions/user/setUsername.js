import { SET_USERNAME } from '../../constants/action-types';

function setUsername(username) {
    return { type: SET_USERNAME, username};
}

export default setUsername;