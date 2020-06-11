import config from '../../config.json';

const getProfileData = (token, userId, email) => {

    fetch(config.server + '/api/user/profile', {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token, 
        },
        body: JSON.stringify({userId: userId, email: email })
    })
        .then(res => res.json())
        .then(data => data.status == 'success' ? console.log('Token is Valid') : console.log('Token is invalid'));

};

export { getProfileData };