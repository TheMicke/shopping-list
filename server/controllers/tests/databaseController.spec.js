/* eslint-disable no-undef */
const assert = require('assert');
const { testDatabaseControllerFile, 
    createNewList, 
    getAllLists, 
    getListTodos, 
    addTodo,
    getAllUsers,
    getSingleUser,
    addUser,
} = require('../databaseController');

it('Adding user', async () => {
    await addUser({username: 'TestUser1', password: 'qwe', email: 'testuser@contoso.com'});
});

describe('DatabaseController test suite', () => {
    it('Looking for databaseController', () => {
        assert.equal(testDatabaseControllerFile(), true);
    });

    it('Adding new list to db', async () => {
        const countBeforeInsert = await getAllLists();
        await createNewList('NameFromTestFile', 'DescriptionFromTestFile', 0);
        const countAfterInsert = await getAllLists();

        assert.equal(countAfterInsert.rows.length, countBeforeInsert.rows.length+1);
    });

    // will cause error if test us run more than once after running createSchema+populateDbMock
    it('Get todos for list 1 (should be 3 if you used the createSchema.js and populateDbMock.js)', async () => {
        const items = await getListTodos(1);
        assert.equal(items.rows.length, 3);
    });

    // will cause error if test us run more than once after running createSchema+populateDbMock
    it('Adding new todo to list 1', async () => {
        const countBeforeInsert = await getListTodos(2);
        await addTodo('testFile', 'testFileDescription', 2);
        const countAfterInsert = await getListTodos(2);

        assert.equal(countAfterInsert.rows.length, countBeforeInsert.rows.length+1);
    });

});

