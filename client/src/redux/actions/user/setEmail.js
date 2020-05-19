import { SET_EMAIL } from '../../constants/action-types';

function setEmail(email) {
    return { type: SET_EMAIL, email};
}

export default setEmail;