import { SET_FIRSTNAME } from '../../constants/action-types';

function setFirstName(firstName) {
    return { type: SET_FIRSTNAME, firstName};
}

export default setFirstName;