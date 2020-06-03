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

module.exports = { 
    getNewClient
};
