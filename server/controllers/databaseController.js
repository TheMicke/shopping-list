const { Client } = require('pg');

// Get a client for database calls
const getNewClient = () => {
    return new Client({
        user: 'admin',
        host: 'localhost',
        database: 'shoppinglist',
        password: 'admin',
        port: 5432,
    });
};

// function used in test file to check this file is read
const testDatabaseControllerFile = () => {
    return true;
};

// Add new list to database
const createNewList = async (listName, listDescription, listOwner) => {
    const client = getNewClient();
    await client.connect();
    
    await client.query(`
        INSERT INTO lists(
            name,
            description,
            owner
        ) 
        VALUES (
            '${listName}',
            '${listDescription}',
            '${listOwner}'
        );
    `);
    
    await client.end();
    return true;
};

// Get all lists from database
const getAllLists = async () => {
    const client = getNewClient();
    await client.connect();
    
    const lists = await client.query(`
        SELECT * FROM lists;
    `);
    
    await client.end;
    return lists;
};

module.exports = { 
    testDatabaseControllerFile, 
    createNewList,
    getAllLists,
};
