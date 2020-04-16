const { Client } = require("pg");

const client = new Client({
    user: "admin",
    host: "localhost",
    database: "shoppinglist",
    password: "admin",
    port: 5432,
});

(async function () {
    await client.connect();
    await client.query(``);

    // eslint-disable-next-line no-console
    console.log("Adding John Doe to db.");
    const random = Math.floor(Math.random() * 1000);
    await client.query(`
    INSERT INTO users(
        first_name,
        last_name,
        nickname,
        email,
        password
    ) 
    VALUES (
        'John',
        'Doe',
        'JohnDoe${random}',
        'johndoe${random}@contoso.com',
        'password'
    );
    `);
    console.log("Done");

    // eslint-disable-next-line no-console
    console.log("Adding lists");
    await client.query(`
        INSERT INTO lists(
            name,
            description,
            owner
        ) 
        VALUES (
            'Shopping list one',
            'Shopping list for taco night',
            '1'
        );
    `);
    // eslint-disable-next-line no-console
    console.log("Done");
    await client.end();
})();
