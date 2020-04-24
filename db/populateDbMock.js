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
    console.log("Adding users to db.");
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
            'JohnDoe',
            'johndoe@contoso.com',
            'password'
        ),
        (
            'Jane',
            'Doe',
            'JaneDoe',
            'janedoe@contoso.com',
            'pwd'
        );
    `);
    console.log("Done");

    // eslint-disable-next-line no-console
    console.log("Adding lists");
    await client.query(`
        INSERT INTO lists(
            title,
            description,
            owner
        ) 
        VALUES (
            'Taco list',
            'Shopping list for taco night',
            '1'
        ),
        (
            'List #2',
            'Random TODO list',
            '2'
        );
    `);
    
    // eslint-disable-next-line no-console
    console.log("Adding todos to lists");
    await client.query(`
        INSERT INTO todos(
            title,
            description,
            list_id
        ) 
        VALUES (
            'Meat',
            'ground beef',
            '1'
        ),
        (
            'Tortillas',
            'The large ones',
            '1'
        ),
        (
            'Avocados',
            'For the guac',
            '1'
        ),
        (
            'Clean the kitchen',
            '',
            '2'
        ),
        (
            'Do some coding',
            'hack hack hack',
            '2'
        );
    `);
    // eslint-disable-next-line no-console
    console.log("Done");
    await client.end();
})();
