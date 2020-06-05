import { connect } from 'react-redux';

// Redux actions and reducers
import setAccessToken from '../../redux/actions/user/setAccessToken';
import getAccessToken from '../../redux/selectors/user/getAccessToken';
import setUsername from '../../redux/actions/user/setUsername';
import getUsername from '../../redux/selectors/user/getUsername';
import setEmail from '../../redux/actions/user/setEmail';
import getEmail from '../../redux/selectors/user/getEmail';
import setFirstName from '../../redux/actions/user/setFirstName';
import getFirstName from '../../redux/selectors/user/getFirstName';
import setLastName from '../../redux/actions/user/setLastName';
import getLastName from '../../redux/selectors/user/getLastName';

// import the view/frontend of Profile-component
import ProfileView from './ProfileView';


const mapStateToProps = (state) => ({
    firstName: getFirstName(state),
    lastName: getLastName(state),
    username: getUsername(state), 
    email: getEmail(state), 
    accessToken: getAccessToken(state) 
});

const mapDispatchToProps = {
    setFirstName,
    setLastName,
    setUsername,
    setEmail,
    setAccessToken,
};

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileView);

export default Profile;