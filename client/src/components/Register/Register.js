import { connect } from 'react-redux';
import setLoginToken from '../../redux/actions/user/setLoginToken';
import getLoginToken from '../../redux/selectors/user/getLoginToken';
import setUsername from '../../redux/actions/user/setUsername';
import getUsername from '../../redux/selectors/user/getUsername';
import setEmail from '../../redux/actions/user/setEmail';
import getEmail from '../../redux/selectors/user/getEmail';
import setFirstName from '../../redux/actions/user/setFirstName';
import getFirstName from '../../redux/selectors/user/getFirstName';
import setLastName from '../../redux/actions/user/setLastName';
import getLastName from '../../redux/selectors/user/getLastName';


import RegisterView from './RegisterView';

const mapStateToProps = (state) => ({ 
    firstName: getFirstName(state),
    lastName: getLastName(state),
    username: getUsername(state), 
    email: getEmail(state), 
    loginToken: getLoginToken(state) 
});

const mapDispatchToProps = {
    setFirstName,
    setLastName,
    setUsername,
    setEmail,
    setLoginToken,
};

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterView);

export default Register;