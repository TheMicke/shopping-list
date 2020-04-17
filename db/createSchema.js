const { Client } = require("pg");

const client = new Client({
    user: "admin",
    host: "localhost",
    database: "shoppinglist",
    password: "admin",
    port: 5432,
});
console.log("Creating DB Schema");

(async function () {
    await client.connect();
    await client.query(``);

    const res = await client.query(`

        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS lists;

        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            first_name VARCHAR NOT NULL,
            last_name VARCHAR NOT NULL,
            nickname VARCHAR NOT NULL UNIQUE,
            email VARCHAR NOT NULL UNIQUE,
            password VARCHAR NOT NULL,
            is_active BOOL NOT NULL DEFAULT true,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS lists (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            name VARCHAR NOT NULL,
            description VARCHAR,
            owner INT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        );
    `);
    console.log("Done");
    await client.end();
})();
