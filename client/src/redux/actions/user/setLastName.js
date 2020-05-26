import { SET_LASTNAME } from '../../constants/action-types';

function setLastName(lastName) {
    return { type: SET_LASTNAME, lastName};
}

export default setLastName;