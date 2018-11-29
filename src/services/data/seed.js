const pg = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/snapwalk";

const pool = new pg.Pool({ connectionString });
pool.connect((err, client, done) => {
  if (err) {
    done();
  }

  const query = client.query("CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(20) UNIQUE, email VARCHAR(40) UNIQUE, password VARCHAR(200)); CREATE TABLE routes(id SERIAL PRIMARY KEY, name VARCHAR(20), description VARCHAR(400), author SERIAL, FOREIGN KEY (author) REFERENCES users (id)); CREATE TABLE places(id SERIAL, name VARCHAR(20), place_order INTEGER, description VARCHAR(400), latitude VARCHAR(20), longitude VARCHAR(20), item VARCHAR(20), route SERIAL, FOREIGN KEY (route) REFERENCES routes (id));"
  );

  query.on('end', () => {
    done();
  });
});

pool.end();
