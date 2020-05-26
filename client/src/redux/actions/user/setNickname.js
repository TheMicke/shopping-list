import { SET_NICKNAME } from '../../constants/action-types';

function setNickname(nickname) {
    return { type: SET_NICKNAME, nickname};
}

export default setNickname;