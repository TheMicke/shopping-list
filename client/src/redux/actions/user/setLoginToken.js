import { SET_LOGINTOKEN } from '../../constants/action-types';

function setLoginToken(loginToken) {
    return { type: SET_LOGINTOKEN, loginToken};
}

export default setLoginToken;