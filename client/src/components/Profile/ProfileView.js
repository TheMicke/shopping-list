import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ProfileView = (props, setFirstName, firstName, setLastName, lastName, setUsername, username, setEmail, email, setAccessToken, accessToken) => {
    console.log('props', props);
    console.log('firstName', firstName);
    console.log('lastName', lastName);
    return (
        <>
            <h1>Profile for {props.username}</h1>
            <p>Name: {`${props.firstName} ${props.lastName}`}</p>
            <p>{`email: ${props.email}`}</p>
        </>
    );
};

ProfileView.propTypes = {
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


// import React from 'react';
// import PropTypes from 'prop-types';

// import { Redirect } from 'react-router-dom';

// const ProfileView = (setFirstName, firstName, setLastName, lastName, setUsername, username, setEmail, email, setAccessToken, accessToken) => {
//     console.log(firstName);
//     console.log(lastName);
//     console.log(username);
//     console.log(email);
//     console.log(accessToken);
//     return (
//         <>
//             <h1>Profile for {username}</h1>
//             <p>Name: {`${firstName} ${lastName}`}</p>
//             <p>{`email: ${email}`}</p>
//         </>
//     );
// };

// ProfileView.propTypes = {
//     firstName: PropTypes.string,
//     setFirstName: PropTypes.func,
//     lastName: PropTypes.string,
//     setLastName: PropTypes.func,
//     username: PropTypes.string,
//     setUsername: PropTypes.func,
//     email: PropTypes.string,
//     setEmail: PropTypes.func,
//     accessToken: PropTypes.string,
//     setAccessToken: PropTypes.func,
// };

// export default ProfileView;