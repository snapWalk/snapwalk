const { Pool, Query } = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/snapwalk";

module.exports = async function getData (query) {
  const data = [];
  let error = null;

  await new Promise((resolve, reject) => {
    const pool = new Pool({ connectionString });

    pool.connect((err, client, done) => {
      if (err) {
        error = err;
        done();
        resolve();
      }

      const q = client.query(new Query(query));

      q.on("error", err => {
        error = err;
        done();
        resolve();
      });

      q.on("row", row => {
        data.push(row);
      });

      q.on("end", () => {
        done();
        resolve();
      });
    });

    pool.end();
  });

  return { data, error };
};
