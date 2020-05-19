const { Client } = require('pg');
const bcrypt = require('bcrypt');

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
const createNewList = async (title, description, owner) => {
    const client = getNewClient();
    await client.connect();
    
    await client.query(`
        INSERT INTO lists(
            title,
            description,
            owner
        ) 
        VALUES (
            '${title}',
            '${description}',
            '${owner}'
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
    
    await client.end();
    return lists;
};

// Add todo to list
const addTodo = async (title, description, listId) => {
    const client = getNewClient();
    await client.connect();

    await client.query(`
        INSERT INTO todos(
            title,
            description,
            list_id
        ) 
        VALUES (
            '${title}',
            '${description}',
            '${listId}'
        );
    `);
    await client.end();
    return true;
};

// Get all list todos
const getListTodos = async (listId) => {
    const client = getNewClient();
    await client.connect();

    const todos = await client.query(`
        SELECT * FROM todos WHERE list_id = ${listId};
    `);

    await client.end();
    return todos;
};

const getAllUsers = async () => {
    const client = getNewClient();
    await client.connect();

    const users = await client.query(`
        SELECT * FROM users;
    `);

    return users;
};

const getSingleUser = async (userData) => {
    const client = getNewClient();
    await client.connect();

    const user = await client.query(`
        SELECT * FROM users WHERE email = '${userData.email}';
    `);

    return user;
};

const addUser = async (userData) => {
    console.log('userData @ addUser @ databaseController; ', userData);
    const client = getNewClient();
    await client.connect();

    if ((await getSingleUser({email: userData.email})).rows.length < 1) {
        console.log('User does not exist and can be added');
    } else {
        console.log('User already exists');
    }
    const pwd = await bcrypt.hash(userData.password, 10);
    
    console.log(userData.password);
    console.log(pwd);

    return true;
};

module.exports = { 
    testDatabaseControllerFile, 
    createNewList,
    getAllLists,
    addTodo,
    getListTodos,
    getAllUsers,
    getSingleUser,
    addUser,
};