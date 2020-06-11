import { SET_USERID } from '../../constants/action-types';

function setUserId(id) {
    return { type: SET_USERID, id};
}

export default setUserId;