const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/snapwalk';

const client = new pg.Client(connectionString);
client.connect();

const query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) UNIQUE, email VARCHAR(40) UNIQUE, password VARCHAR(200)); CREATE TABLE routes(id SERIAL PRIMARY KEY, name VARCHAR(20), description VARCHAR(400), author INTEGER); CREATE TABLE places(id SERIAL, name VARCHAR(20), place_order INTEGER, description VARCHAR(400), latitude VARCHAR(20), lonitude VARCHAR(20), item VARCHAR(20), routes INTEGER); ALTER TABLE routes ADD FOREIGN KEY(author) REFERENCES users(id); ALTER TABLE places ADD FOREIGN KEY(routes) REFERENCES routes(id)');

query.on('end', () => { client.end(); });
