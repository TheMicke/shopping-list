import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config.json';
import store from '../../redux/store';

const handleRegister = (firstName, setFirstName, lastName, setLastName, email, setEmail, nickname, setNickname, password) => {
    
    setFirstName(firstName);
    setLastName(lastName);
    setNickname(nickname);
    setEmail(email)
    console.log(store.getState());

    // const handleRegisterSuccess = () => {
    //     setNickname(nickname);
    //     setIsConnected(true);
    // };
    
    // const handleRegisterFailure = (data) => {
    //     console.log(data.loginMessage);
    //     console.log(store.getState());
    // };

    // fetch(config.server + '/user/register', {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, nickname: nickname, password: password }),
    // })
    //     .then(res => res.json())
    //     .then(data => (data.status === 'success' ? console.log('register successful', data) : console.log('register failed ', data)));
};

const RegisterView = ({ setFirstName, firstName, setLastName, lastName, setNickname, nickname, setEmail, email, setLoginToken, loginToken }) => (
    <>
        <p>This is the Register component</p>

        <form>
            <input type="text" id="register-first-name" name="first-name" placeholder="First name"></input>
            <input type="text" id="register-last-name" name="last-name" placeholder="Last name"></input>
            <input type="text" id="nickname" name="nickname" placeholder="Nickname"></input>
            <input type="email" id="register-email" name="register-email" placeholder="E-mail"></input>
            <input type="password" id="register-password" name="register-password" placeholder="Password"></input>
            <button
                onClick={e => {
                    e.preventDefault();
                    handleRegister(
                        document.getElementById('register-first-name').value, 
                        setFirstName,
                        document.getElementById('register-last-name').value, 
                        setLastName,
                        document.getElementById('register-email').value, 
                        setEmail, 
                        document.getElementById('nickname').value,
                        setNickname,
                        document.getElementById('register-password').value
                        );
                }}
            >
                Register
            </button>
        </form>
    </>
);

RegisterView.propTypes = {
    nickname: PropTypes.string,
    setNickname: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    loginToken: PropTypes.string,
    setLoginToken: PropTypes.func,
};

export default RegisterView;