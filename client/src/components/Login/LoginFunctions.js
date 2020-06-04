/********************************************************************
**  This files has the functions used on the register view.        **
**  Functions and frontend are separated for a cleaner code base.  **
********************************************************************/

import config from '../../config.json';
import setAccessToken from '../../redux/actions/user/setAccessToken';
import store from '../../redux/store';

const handleLogin = (email, password, setAccessToken) => {
    const loginInfoText = document.getElementById('login-info-text');

    const handleLoginSuccess = (data) => {
        localStorage.setItem('listAppAccessToken', data.token)
        setAccessToken(data.token);
        console.log(data.token);
        console.log(store.getState());
    };
    
    const handleLoginFailure = (data) => {
        loginInfoText.textContent = data.message;
        console.log(data.loginMessage);
    };

    fetch(config.server + '/user/login', {
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