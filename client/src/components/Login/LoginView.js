import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config.json';
import store from '../../redux/store';

const handleLogin = (email, setEmail, password) => {
    console.log(email);
    console.log(password);
    setEmail(email)


    // const handleLoginSuccess = () => {
    //     setUsername(username);
    //     setIsConnected(true);
    // };
    
    // const handleLoginFailure = (data) => {
    //     console.log(data.loginMessage);
    //     console.log(store.getState());
    // };

    // fetch(config.server + '/user/login', {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: email }),
    // })
    //     .then(res => res.json())
    //     .then(data => (data.status === 'login_successful' ? handleLoginSuccess(data) : handleLoginFailure(data)));
};

const LoginView = ({ setUsername, username, setEmail, email, setLoginToken, loginToken }) => (
    <>
        <p>This is the Login component</p>
        <p>Current user: {username}({email})</p>

        <form>
            <input type="email" id="email" name="email" placeholder="Email"></input>
            <input type="password" id="password" name="password" placeholder="Password"></input>
            <button
                onClick={e => {
                    e.preventDefault();
                    handleLogin(
                        document.getElementById('email').value, 
                        setEmail, 
                        document.getElementById('password').value
                        );
                }}
            >
                Login
            </button>
        </form>
    </>
);

LoginView.propTypes = {
    username: PropTypes.string,
    setUsername: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    loginToken: PropTypes.string,
    setLoginToken: PropTypes.func,
};

export default LoginView;