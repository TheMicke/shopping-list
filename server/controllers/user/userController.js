const { checkLoginCredentials, getSingleUserByEmail } = require('../db/databaseUsersController');
const { getJwtToken } = require('../token/tokenController');

const userLogin = async userData => {
    if (await checkLoginCredentials(userData.email, userData.password)) {
        console.log('Credentials checks out! Logging in!');
        const user = await getSingleUserByEmail({ email: userData.email });
        const token = await getJwtToken(user.rows[0]);

        return { 
            status: 'success', 
            message: '', 
            id: user.rows[0].id,
            firstName: user.rows[0].first_name,
            lastName: user.rows[0].last_name,
            username: user.rows[0].username,
            token: token,
        };
    } else {
        console.log('Credentials does not check out!');
        return { status: 'failed', message: 'Wrong email or password' };
    }
};


module.exports = { userLogin };
