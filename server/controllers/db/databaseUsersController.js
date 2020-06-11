const { getNewClient } = require('./databaseClient');
const bcrypt = require('bcrypt');


// function used in test file to check this file is read
const testDatabaseUsersControllerFile = () => {
    return true;
};

// Return all users from the database
const getAllUsers = async () => {
    const client = getNewClient();
    await client.connect();

    const users = await client.query(`
        SELECT * FROM users;
    `);

    return users;
};

// Return single user from database based on email
const getSingleUserByEmail = async (email) => {
    const client = getNewClient();
    await client.connect();
    
    const user = await client.query(`
    SELECT * FROM users WHERE email = '${email}';
    `);
    
    return user;
};

// Return single user from database based on username
const getSingleUserByUsername = async (userData) => {
    const client = getNewClient();
    await client.connect();

    const user = await client.query(`
        SELECT * FROM users WHERE username = '${userData.username}';
    `);

    return user;

};

// Add new user to the database
const addUserToDb = async (userData, userRole = 3) => { // userRole 3 == User. Should default to that if super admin (1) or admin (2) is not specified
    const client = getNewClient();
    await client.connect();

    if ((await getSingleUserByEmail(userData.email)).rowCount !== 0) {
        return {status: 'failed', message: 'Email is already registered'};
    } 

    if ((await getSingleUserByUsername({username: userData.username})).rowCount !== 0) {
        return {status: 'failed', message: 'Username is already taken'};
    } else {
        console.log('Adding user to database...');
        const pwd = await bcrypt.hash(userData.password, 10);
        await client.query(`
            INSERT INTO users (
                first_name,
                last_name,
                username,
                email,
                password,
                user_role
            )
            VALUES (
                '${userData.firstName}',
                '${userData.lastName}',
                '${userData.username}',
                '${userData.email}',
                '${pwd}',
                '${userRole}'
            );
        `);
        console.log('Done');
        return {status: 'success', message: 'Successfully registered user'};
    }
};


module.exports = { 
    testDatabaseUsersControllerFile, 
    getAllUsers,
    getSingleUserByEmail,
    getSingleUserByUsername,
    addUserToDb,
};
