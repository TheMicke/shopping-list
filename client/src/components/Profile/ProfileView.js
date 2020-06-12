import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { getProfileData } from './ProfileFunctions';

const ProfileView = ({setUserId, userId, setFirstName, firstName, setLastName, lastName, setUsername, username, setEmail, email, setAccessToken, accessToken}) => {
   
    if (accessToken == null) {
        const data = JSON.parse(localStorage.getItem('listAppData'));
        if(data == null) {
            <Redirect to='/login' />
        } else {
            setUserId(Number(data.userId));
            setEmail(data.userEmail);
            setAccessToken(data.accessToken)
        }
    }
    
    if (accessToken != null && userId != null && email != null) {
        getProfileData(accessToken, userId, email)
    }

    return (
        accessToken == null ? <Redirect to='/login' /> : 
            <>
                <h1>Profile for {username}</h1>
                <p>ID: {userId}</p>
                <p>Name: {firstName && firstName} {lastName && lastName}</p>
                <p>Email: {email}</p>
            </>
    );
};

ProfileView.propTypes = {
    userId: PropTypes.number,
    firstName: PropTypes.string,
    setFirstName: PropTypes.func,
    lastName: PropTypes.string,
    setLastName: PropTypes.func,
    username: PropTypes.string,
    setUsername: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    accessToken: PropTypes.string,
    setAccessToken: PropTypes.func,
};

export default ProfileView;
