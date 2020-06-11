const bcrypt = require('bcrypt');

const { addUserToDb, getSingleUserByEmail } = require('../db/databaseUsersController');
const { generateJwtToken } = require('../token/tokenController');

const addUser = async (userData) => {
    return await addUserToDb(userData);
};

const userLogin = async (userData) => {
    if (await checkLoginCredentials(userData.email, userData.password)) {
        console.log('Credentials checks out! Logging in!');
        const user = await getSingleUserByEmail(userData.email);
        const token = await generateJwtToken(user.rows[0]);

        return { 
            status: 'success', 
            message: '', 
            id: user.rows[0].id,
            username: user.rows[0].username,
            email: user.rows[0].email,
            userRole: user.rows[0].user_role,
            firstName: user.rows[0].first_name,
            lastName: user.rows[0].last_name,
            token: token,
        };
    } else {
        console.log('Credentials does not check out!');
        return { status: 'failed', message: 'Wrong email or password' };
    }
};


// Currently only support email...
const getSingleUser = async (emailOrUsername) => {
    const user = await getSingleUserByEmail(emailOrUsername);

    if(user.rowCount == 0) {
        return { status: 'failed', message: 'Something went wrong finding user in the database' };
    } else {
        return { status: 'success', message: '', data: user };
    }

};


// Check user login credentials
const checkLoginCredentials = async (email, password) => {
    const user = await getSingleUserByEmail(email);
    const pwd = user.rows[0].password;
    
    if (await bcrypt.compare(password, pwd)) {
        console.log('password checks out');
        return true;
    } else {
        console.log('wrong pwd');
        return false;
    }
};

module.exports = { 
    addUser,
    userLogin, 
    getSingleUser 
};
