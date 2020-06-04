import { SET_ACCESSTOKEN } from '../../constants/action-types';

function setAccessToken(accessToken) {
    return { type: SET_ACCESSTOKEN, accessToken};
}

export default setAccessToken;