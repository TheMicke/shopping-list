import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config.json';
import store from '../../redux/store';

const handleLogin = (email, setEmail, password) => {

    setEmail(email)
    

    // const handleLoginSuccess = () => {
    //     setNickname(nickname);
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

const LoginView = ({ setNickname, nickname, setEmail, email, setLoginToken, loginToken }) => (
    <>
        <p>This is the Login component</p>
        <p>Current user: {nickname}({email})</p>

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
    nickname: PropTypes.string,
    setNickname: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    loginToken: PropTypes.string,
    setLoginToken: PropTypes.func,
};

export default LoginView;