/********************************************************************
**  This files has the functions used on the register view.        **
**  Functions and frontend are separated for a cleaner code base.  **
********************************************************************/

import config from '../../config.json';

const handleLogin = (email, password, setUserId, setFirstName, setLastName, setUsername, setAccessToken) => {
    const loginInfoText = document.getElementById('login-info-text');

    const handleLoginSuccess = (data) => {
        console.log('data@handleLoginSuccess', data);
        localStorage.setItem('listAppAccessToken', data.token);
        localStorage.setItem('listAppUserId', data.id);
        localStorage.setItem('listAppUserEmail', data.email);

        setUserId(data.id);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setUsername(data.username);
        setAccessToken(data.token);
    };
    
    const handleLoginFailure = (data) => {
        loginInfoText.textContent = data.message;
        console.log(data.loginMessage);
    };

    fetch(config.server + '/api/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
        .then(res => res.json())
        .then(data => (data.status === 'success' ? handleLoginSuccess(data) : handleLoginFailure(data)));
};

export { handleLogin }