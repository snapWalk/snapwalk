const express = require("express");
const router = express.Router();
const path = require("path");
const getData = require("../common/database-access");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

router.get("/api/v1/create/routes", (req, res, next) => {
  getData("SELECT * FROM routes;").then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ body: results.data });
    }
  });
});

router.post("/api/v1/create", (req, res, next) => {
  getData(
    `INSERT INTO routes (id, name, description) VALUES (nextval('serial'), '${
      req.body.name
    }', '${req.body.description}')`
  ).then(results => {
    if (results.error) {
      res.status(404).send({ error: results.error });
    } else {
      res.send({ message: "new route added" });
    }
  });
});

module.exports = router;
