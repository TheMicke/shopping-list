const { getJwtToken } = require('../token/tokenController');

const { checkLoginCredentials, getSingleUserByEmail } = require('../db/databaseUsersController');

const attemptLogin = async userData => {
    if (await checkLoginCredentials(userData.email, userData.password)) {
        console.log('Credentials checks out! Logging in!');
        const user = await getSingleUserByEmail({ email: userData.email });
        const token = await getJwtToken(user.rows[0]);
        
        return { status: 'success', message: '', token: token };
    } else {
        console.log('Credentials does not check out!');
        return { status: 'fail', message: 'Email and/or password did not match' };
    }
};



module.exports = { attemptLogin };
