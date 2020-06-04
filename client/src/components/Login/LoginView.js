import React from 'react';
import PropTypes from 'prop-types';

import { handleLogin } from './LoginFunctions';

const LoginView = ({ setFirstName, firstName, setLastName, lastName, setUsername, username, setEmail, email, setAccessToken, accessToken }) => (
    <>
        <p>This is the Login component</p>
        <p>Current user: {username}({email})</p>

        <form>
            <input type="email" id="login-email" name="email" placeholder="Email"></input>
            <input type="password" id="login-password" name="password" placeholder="Password"></input>
            <button
                onClick={e => {
                    e.preventDefault();
                    handleLogin(
                        document.getElementById('login-email').value, 
                        document.getElementById('login-password').value,
                        setAccessToken
                        );
                }}
            >
                Login
            </button>
        </form>
        <p id="login-info-text"></p>
    </>
);

LoginView.propTypes = {
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

export default LoginView;