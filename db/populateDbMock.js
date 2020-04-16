const { Client } = require("pg");
const faker = require("faker");

const client = new Client({
  user: "admin",
  host: "localhost",
  database: "bitoffice",
  password: "admin",
  port: 5432
});
(async function() {
  await client.connect();
  await client.query(``);

  // eslint-disable-next-line no-console
  console.log("Adding Guil Hernandez to db.");
  await client.query(`
      INSERT INTO users(
        first_name,
        last_name,
        email,
        phone,
        password,
        avatar_url,
        street,
        postal_code,
        city,
        country
      ) 
      VALUES (
        'Guil',
        'Hernandez',
        'guil@hernandez.com',
        '070-2394662',
        'password',
        'https://pbs.twimg.com/profile_images/578368788535455744/WhLtbEaB_400x400.jpeg',
        'Teamtreehousstraße',
        '56232',
        'Berlin',
        'Germany'
      );
  `);
  console.log("Done");

  // eslint-disable-next-line no-console
  console.log("Populating users table");
  for (let i = 0; i < 1000; i += 1) {
    await client.query(`
      INSERT INTO users(
        first_name,
        last_name,
        email,
        phone,
        password,
        avatar_url,
        street,
        postal_code,
        city,
        country
      ) 
      VALUES (
        '${faker.name.firstName().replace("'", "")}',
        '${faker.name.lastName().replace("'", "")}',
        '${faker.internet.email().replace("'", "")}',
        '${faker.phone.phoneNumber().replace("'", "")}',
        '${faker.internet.password().replace("'", "")}',
        '${faker.internet.avatar().replace("'", "")}',
        '${faker.address.streetAddress().replace("'", "")}',
        '${faker.address.zipCode().replace("'", "")}',
        '${faker.address.city().replace("'", "")}',
        '${faker.address.country().replace("'", "")}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating locations table");
  for (let i = 0; i < 1000; i += 1) {
    await client.query(`
      INSERT INTO locations(
        name,
        description,
        street,
        postal_code,
        city,
        country
      ) 
      VALUES (
        '${faker.company.companyName().replace(/'/gi, "")}',
        '${faker.company.catchPhrase().replace("'", "")}',
        '${faker.address.streetAddress().replace("'", "")}',
        '${faker.address.zipCode().replace("'", "")}',
        '${faker.address.city().replace("'", "")}',
        '${faker.address.country().replace("'", "")}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating amenities table");
  for (let i = 0; i < 1000; i += 1) {
    await client.query(`
      INSERT INTO amenities(
        name,
        description
      ) 
      VALUES (
        '${faker.commerce.product().replace("'", "")}',
        '${faker.commerce.productName().replace("'", "")}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating workplaces table");
  for (let i = 0; i < 10000; i += 1) {
    // eslint-disable-next-line no-console
    console.log(`Added ${i} workplaces.`)
    await client.query(`
      INSERT INTO workplaces(
        name,
        description,
        price,
        spaces,
        location_id,
        image
      ) 
      VALUES (
        '${faker.company.catchPhraseDescriptor()} ${faker.company.catchPhraseNoun()}',
        '${faker.lorem.sentence()}',
        '${faker.finance.amount()}',
        '${Math.floor(Math.random() * 5) + 1}',
        '${Math.floor(Math.random() * 1000) + 1}',
        'https://source.unsplash.com/collection/4616419/400x250'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating rents table");
  for (let i = 0; i < 1000; i += 1) {
    await client.query(`
    INSERT INTO rents(
      renter_id,
      workplace_id,
      price) 
      VALUES (
      '${Math.floor(Math.random() * 1000) + 1}',
      '${Math.floor(Math.random() * 1000) + 1}',
      '${faker.finance.amount()}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating payments table");
  for (let i = 0; i < 1000; i += 1) {
    await client.query(`
    INSERT INTO payments(
      rent_id,
      sender_id,
      receiver_id,
      price
      ) 
      VALUES (
      '${Math.floor(Math.random() * 1000) + 1}',
      '${Math.floor(Math.random() * 1000) + 1}',
      '${Math.floor(Math.random() * 1000) + 1}',
      '${faker.finance.amount()}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating has_amenities table");
  for (let i = 0; i < 1000; i += 1) {
    await client.query(`
    INSERT INTO has_amenities(
      amenity_id,
      location_id
      ) 
      VALUES (
      '${Math.floor(Math.random() * 1000) + 1}',
      '${Math.floor(Math.random() * 1000) + 1}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  // eslint-disable-next-line no-console
  console.log("Populating unavailabilities table");
  for (let i = 0; i < 1000; i += 1) {
    date = new Date();
    await client.query(`
    INSERT INTO unavailabilities(
      workplace_id,
      rents_id,
      start_date,
      end_date
      ) 
      VALUES (
      '${Math.floor(Math.random() * 1000) + 1}',
      '${Math.floor(Math.random() * 1000) + 1}',
      '${faker.date.past().toISOString()}',
      '${faker.date.future().toISOString()}'
      );
  `);
  }
  // eslint-disable-next-line no-console
  console.log('Done')

  await client.end();
})();
