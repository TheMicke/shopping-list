import { connect } from 'react-redux';
import setLoginToken from '../../redux/actions/user/setLoginToken';
import getLoginToken from '../../redux/selectors/user/getLoginToken';
import setUsername from '../../redux/actions/user/setUsername';
import getUsername from '../../redux/selectors/user/getUsername';
import setEmail from '../../redux/actions/user/setEmail';
import getEmail from '../../redux/selectors/user/getEmail';

import LoginView from './LoginView';

const mapStateToProps = (state) => ({ username: getUsername(state), email: getEmail(state), loginToken: getLoginToken(state) });

const mapDispatchToProps = {
    setUsername,
    setEmail,
    setLoginToken,
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default Login;