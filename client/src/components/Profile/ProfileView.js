import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { getProfileData } from './ProfileFunctions';

const ProfileView = ({setUserId, userId, setFirstName, firstName, setLastName, lastName, setUsername, username, setEmail, email, setAccessToken, accessToken}) => {
   
    const userProfile = getProfileData(accessToken, userId, email);

    return (
        accessToken == null ? <Redirect to='/login' /> :
        <>
            <h1>Profile for {username}</h1>
            <p>ID: {userId}</p>
            <p>Name: {`${firstName} ${lastName}`}</p>
            <p>{`email: ${email}`}</p>
        </>
    );
};

ProfileView.propTypes = {
    userId: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    setFirstName: PropTypes.func,
    lastName: PropTypes.string,
    setLastName: PropTypes.func,
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func,
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func,
    accessToken: PropTypes.string.isRequired,
    setAccessToken: PropTypes.func,
};

export default ProfileView;
