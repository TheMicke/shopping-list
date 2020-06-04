/* eslint-disable no-undef */
const assert = require('assert');

const { testDatabaseUsersControllerFile, 
    getAllUsers,
    getSingleUser,
    addUser,
} = require('../db/databaseUsersController');


function randomInt() {
    return Math.floor(Math.random() * Math.floor(999999));
}


describe('Database User Controller test suite', () => {
    it('Looking for databaseUserController file', () => {
        assert.equal(testDatabaseUsersControllerFile(), true);
    });

    it('Adding regular user', async () => {
        const rnd = randomInt();
        const arg1 = await addUser({firstName: 'Test', lastName: 'User', username: `TestUser${rnd}`, password: 'qwe', email: `testuser${rnd}@contoso.com`});
        assert.deepEqual(arg1, {status: 'success', message: 'Successfully registered user'});
    });

});
