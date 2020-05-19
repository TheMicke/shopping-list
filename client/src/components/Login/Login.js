import { connect } from 'react-redux';
import setLoginToken from '../../redux/actions/user/setLoginToken';
import getLoginToken from '../../redux/selectors/user/getLoginToken';
import setNickname from '../../redux/actions/user/setNickname';
import getNickname from '../../redux/selectors/user/getNickname';
import setEmail from '../../redux/actions/user/setEmail';
import getEmail from '../../redux/selectors/user/getEmail';

import LoginView from './LoginView';

const mapStateToProps = (state) => ({ nickname: getNickname(state), email: getEmail(state), loginToken: getLoginToken(state) });

const mapDispatchToProps = {
    setNickname,
    setEmail,
    setLoginToken,
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default Login;