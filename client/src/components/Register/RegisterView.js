import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config.json';
import { Redirect } from 'react-router-dom';
import store from '../../redux/store';

const confirmPasswordMatch = (setFirstName, setLastName, setUsername, setEmail, setLoginToken) => {
    const registerPasswordField = document.getElementById('register-password');
    const registerPasswordConfirmField = document.getElementById('register-confirm-password');
    const registerInfoText = document.getElementById('register-info-text');

    if (registerPasswordField.value != registerPasswordConfirmField.value) {
        registerInfoText.textContent = 'Passwords do not match'; 
    } else {
        handleRegister(
            document.getElementById('register-first-name').value, 
            setFirstName,
            document.getElementById('register-last-name').value, 
            setLastName,
            document.getElementById('register-email').value, 
            setEmail, 
            document.getElementById('register-username').value,
            setUsername,
            document.getElementById('register-password').value
        );
    }
}

const handleRegister = (firstName, setFirstName, lastName, setLastName, email, setEmail, username, setUsername, password) => {
    const registerInfoText = document.getElementById('register-info-text');
    const registerFirstNameField = document.getElementById('register-first-name');
    const registerLastNameField = document.getElementById('register-last-name');
    const registerUsernameField = document.getElementById('register-username');
    const registerEmailField = document.getElementById('register-email');
    const registerPasswordField = document.getElementById('register-password');
    const registerConfirmPasswordField = document.getElementById('register-password');

    const handleRegisterSuccess = () => {
        setFirstName(firstName);
        setLastName(lastName);
        setUsername(username);
        setEmail(email)

        registerInfoText.textContent = '';
        registerFirstNameField.value = '';
        registerLastNameField.value = '';
        registerUsernameField.value = '';
        registerEmailField.value = '';
        registerPasswordField.value = '';
        registerConfirmPasswordField.value = '';
    };
    
    const handleRegisterFailure = (data) => {
        console.log('Not so great success in handleRegisterFailure');
        registerInfoText.textContent = data.message;
    };

    fetch(config.server + '/user/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, username: username, password: password }),
    })
        .then(res => res.json())
        .then(data => data.status == 'success' ? handleRegisterSuccess(data) : handleRegisterFailure(data));
};


// The actual view
const RegisterView = ({ setFirstName, firstName, setLastName, lastName, setUsername, username, setEmail, email, setLoginToken, loginToken }) => (
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
                    confirmPasswordMatch(setFirstName, setLastName, setUsername, setEmail, setLoginToken);
                }}
            >
                Register
            </button>
        </form>
        <p id="register-info-text"></p>

    </>
);

RegisterView.propTypes = {
    username: PropTypes.string,
    setUsername: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    loginToken: PropTypes.string,
    setLoginToken: PropTypes.func,
};

export default RegisterView;