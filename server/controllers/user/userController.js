const { checkLoginCredentials, getSingleUserByEmail } = require('../db/databaseUsersController');
const { generateJwtToken } = require('../token/tokenController');

const userLogin = async (userData) => {
    if (await checkLoginCredentials(userData.email, userData.password)) {
        console.log('Credentials checks out! Logging in!');
        const user = await getSingleUserByEmail({ email: userData.email });
        const token = await generateJwtToken(user.rows[0]);

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


// Currently only support email...
const getSingleUser = async (emailOrUsername) => {
    const user = await getSingleUserByEmail({email: emailOrUsername});

    if(user.rowCount == 0) {
        return { status: 'failed', message: 'Something went wrong finding user in the database' };
    } else {
        return { status: 'success', message: '', data: user };
    }

};


module.exports = { userLogin, getSingleUser };
