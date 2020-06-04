/********************************************************************
**  This files has the functions used on the register view.        **
**  Functions and frontend are separated for a cleaner code base.  **
********************************************************************/
import React from 'react';
import config from '../../config.json';
import { Redirect } from 'react-router-dom';

// Checks if the two strings match, return false if missmatch else return true
const checkPasswordMatch = (password, passwordConfirm) => {
    if (password != passwordConfirm) {
        return false;
    } else {
        return true;
    }
};

// Changes the info-text if passwords missmatch
const handleRegisterInfoText = (text, type = 'text') => {
    const registerInfoText = document.getElementById('register-info-text');
    if (type == 'html') {
        registerInfoText.innerHTML = text;
    } else {
        registerInfoText.textContent = text;
    }
    
};

// Handle the registring process for frontend. 
const doRegisterUser = (firstName, lastName, email, username, password) => {
    const registerInfoText = document.getElementById('register-info-text');
    const registerFirstNameField = document.getElementById('register-first-name');
    const registerLastNameField = document.getElementById('register-last-name');
    const registerUsernameField = document.getElementById('register-username');
    const registerEmailField = document.getElementById('register-email');
    const registerPasswordField = document.getElementById('register-password');

    // Handles a success of registering user
    const handleRegisterSuccess = () => {
        registerInfoText.textContent = '';
        registerFirstNameField.value = '';
        registerLastNameField.value = '';
        registerUsernameField.value = '';
        registerEmailField.value = '';
        registerPasswordField.value = '';
        handleRegisterInfoText('User registered successfully. Click <a href="/login">here</a> to login.', 'html');
        <Redirect to='/login' />
    };
    
    // Handles a failure to register user
    const handleRegisterFailure = (data) => {
        console.log('Not so great success in handleRegisterFailure');
        handleRegisterInfoText(data.message);
    };


    // User input will be sent to the backend to be validated. 
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

export { checkPasswordMatch, handleRegisterInfoText, doRegisterUser }