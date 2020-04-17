/* eslint-disable no-undef */
const assert = require('assert');
const { testDatabaseControllerFile, createNewList, getAllLists } = require('../databaseController');

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

});

