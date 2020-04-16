const { Client } = require("pg");

const client = new Client({
  user: "admin",
  host: "localhost",
  database: "bitoffice",
  password: "admin",
  port: 5432
});
console.log('Creating DB Schema');
(async function() {
  await client.connect();
  await client.query(``);
  const res = await client.query(`
  CREATE TABLE IF NOT EXISTS users (
   id SERIAL PRIMARY KEY NOT NULL UNIQUE,
   first_name VARCHAR NOT NULL,
   last_name VARCHAR NOT NULL,
   email VARCHAR NOT NULL UNIQUE,
   phone VARCHAR NOT NULL UNIQUE,
   password VARCHAR NOT NULL,
   avatar_url VARCHAR,
   street VARCHAR,
   postal_code VARCHAR,
   city VARCHAR,
   country VARCHAR,
   is_active BOOL NOT NULL DEFAULT true,
   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMP
    );

  CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    description VARCHAR,
    street VARCHAR NOT NULL,
    postal_code VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    country VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS amenities (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    description VARCHAR,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS workplaces (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    description VARCHAR,
    price NUMERIC(9,2) NOT NULL,
    spaces INT NOT NULL,
    location_id INT NOT NULL,
    image VARCHAR,
    FOREIGN KEY (location_id) REFERENCES locations(id)
  );

  CREATE TABLE IF NOT EXISTS rents (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    renter_id INT NOT NULL,
    workplace_id INT NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    price NUMERIC(9,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    FOREIGN KEY (renter_id) REFERENCES users(id),
    FOREIGN KEY (workplace_id) REFERENCES workplaces(id)
  );

  CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    rent_id INT NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    price NUMERIC(9,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    FOREIGN KEY (rent_id) REFERENCES rents(id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS has_amenities (
    amenity_id INT NOT NULL,
    location_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    FOREIGN KEY (amenity_id) REFERENCES amenities(id),
    FOREIGN KEY (location_id) REFERENCES locations(id)
  );

  CREATE TABLE IF NOT EXISTS unavailabilities (
    workplace_id INT NOT NULL,
    rents_id INT,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    FOREIGN KEY (workplace_id) REFERENCES workplaces(id),
    FOREIGN KEY (rents_id) REFERENCES rents(id)
  );
  `)
  console.log('Done');
  await client.end();
})();
