const express = require("express");
const router = express.Router();
const path = require("path");
const getData = require("../common/database-access");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

router.get("/api/v1/hello", (req, res, next) => {
  res.send({ message: "Hello world!" });
});

router.get("/api/v1/routes", (req, res, next) => {
  // NOTE: This will not work unless the user has been created
  // Add in better error handling!
  getData("SELECT * FROM routes;").then(results => {
    if (results.error) {
      console.log(results.error);
      res.status(404).send({ error: results.error });
    } else {
      console.log(results.data);
      res.send({ body: results.data });
    }
  });
});

router.post("/api/v1/user", (req, res, next) => {
  // NOTE: This will not work unless the user has been created
  // Add in better error handling!
  getData(
    `INSERT INTO routes (name, description) VALUES ('${req.body.name}', '${
      req.body.description
    }') RETURNING *;`
  ).then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ message: "new route added" });
    }
  });
});

// router.post('/api/v1/create', (req, res, next) => {
//   getData(`INSERT INTO items () VALUES ('${req.body.name}', ${req.body.description}) RETURNING *;`)
//     .then(results => results.error
//       ? res.status(404).send({ error: results.error })
//       : res.send({ body: results.data })
//     );
// });

module.exports = router;
