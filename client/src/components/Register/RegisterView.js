import React from 'react';
import PropTypes from 'prop-types';

import { checkPasswordMatch, handleRegisterInfoText, doRegisterUser } from './RegisterFunctions';

/*
/ The actual view / frontend
*/
const RegisterView = ({ firstName, lastName, username, email, accessToken }) => (
    <>
        <p>This is the Register component</p>

        <form>
            <input type="text" id="register-first-name" name="first-name" placeholder="First name"></input>
            <input type="text" id="register-last-name" name="last-name" placeholder="Last name"></input>
            <input type="text" id="register-username" name="username" placeholder="Username"></input>
            <input type="email" id="register-email" name="register-email" placeholder="E-mail"></input>
            <input type="password" id="register-password" name="register-password" placeholder="Password"></input>
            <input type="password" id="register-confirm-password" name="register-confirm-password" placeholder="Confirm Password"></input>
            <button
                onClick={e => {
                    e.preventDefault();
                    checkPasswordMatch(document.getElementById('register-password').value, document.getElementById('register-confirm-password').value) ?
                        doRegisterUser(
                            document.getElementById('register-first-name').value, 
                            document.getElementById('register-last-name').value, 
                            document.getElementById('register-email').value, 
                            document.getElementById('register-username').value,
                            document.getElementById('register-password').value
                        ) : handleRegisterInfoText('Passwords do not match');
                }}
            >
                Register
            </button>
        </form>
        <p id="register-info-text"></p>

    </>
);

RegisterView.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    accessToken: PropTypes.string,
};

export default RegisterView;