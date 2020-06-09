import config from '../../config.json';

const getProfileData = (token) => {

    fetch(config.server + '/api/user/profile', {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token, 
        },
    })
        .then(res => res.json())
        .then(data => data.status == 'success' ? handleRegisterSuccess(data) : handleRegisterFailure(data));

};

export { getProfileData };