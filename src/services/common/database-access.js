const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todos';

module.exports = async function getData (query) {
  const data = [];
  let error = null;

  await new Promise((resolve, reject) => {
    const pool = new pg.Pool({ connectionString });
    // Get a Postgres client from the connection pool
    pool.connect((err, client, done) => {
      // Handle connection errors
      if (err) {
        done(); // Kills the pg connection
        error = err; // Stores the error it came back with
        resolve(); // Finishes the Promise
      }
      // Create SQL query
      const q = client.query(query);
      // Stream data back one row at a time
      q.on('row', (row) => {
        data.push(row);
      });
      // After all data is returned, close connection and resolve promise
      q.on('end', () => {
        done();
        resolve();
      });
    });
    pool.end();
  });
  
  return { data, error };
}
