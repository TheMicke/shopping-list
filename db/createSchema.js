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

        DROP TABLE IF EXISTS todos;
        DROP TABLE IF EXISTS lists;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS user_roles;

        CREATE TABLE IF NOT EXISTS user_roles (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            title VARCHAR NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            first_name VARCHAR NOT NULL,
            last_name VARCHAR NOT NULL,
            username VARCHAR NOT NULL UNIQUE,
            email VARCHAR NOT NULL UNIQUE,
            password VARCHAR NOT NULL,
            user_role INT NOT NULL,
            FOREIGN KEY (user_role) REFERENCES user_roles (id),
            is_active BOOL NOT NULL DEFAULT true,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS lists (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            title VARCHAR NOT NULL,
            description VARCHAR,
            owner INT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY NOT NULL UNIQUE,
            title VARCHAR NOT NULL,
            description VARCHAR,
            is_checked BOOL DEFAULT false,
            checked_by INT,
            list_id INT NOT NULL,
            FOREIGN KEY (list_id) REFERENCES lists (id),
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP
        )

    `);
    console.log("Done");
    await client.end();
})();
