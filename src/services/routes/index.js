const express = require("express");
const router = express.Router();
const path = require("path");
const getData = require("../common/database-access");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

router.get("/api/v1/routes", (req, res, next) => {
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

router.post("/api/v1/routes", (req, res, next) => {
<<<<<<< HEAD
  getData(`INSERT INTO routes (name, description, author) VALUES ('${req.body.route.name}', '${req.body.route.description}', '${req.body.route.author}') RETURNING *;`)
    .then(routeResults => {
      getData(`INSERT INTO places (name, description, longitude, latitude, item, route) VALUES ('${req.body.place1.name}', '${req.body.place1.description}', '${req.body.place1.longitude}', '${req.body.place1.latitude}', '${req.body.place1.item}', '${parseInt(routeResults.data[0].id)}') RETURNING *;`)
        .then(placeResults =>
          res.send({ body: placeResults.data })
        )
        .catch(error => {
          res.status(404).send({ error: error });
        });
    })
    .catch(routeError => {
      res.status(404).send({ routeError: routeError });
    });
=======
  console.log(req.body);
  getData(
    `INSERT INTO routes (name, description, author) VALUES ('${
      req.body.route.name
    }', '${req.body.route.description}', '${
      req.body.route.author
    }') RETURNING *;`
  ).then(routeResults => {
    if (routeResults.error) {
      console.log("error in routes", routeResults.error);
      res.status(404).send({ routeError: routeResults.error });
    } else {
      getData(
        `INSERT INTO places (name, description, longitude, latitude, item, route) VALUES ('${
          req.body.place1.name
        }', '${req.body.place1.description}', '${
          req.body.place1.longitude
        }', '${req.body.place1.latitude}', '${
          req.body.place1.item
        }', '${parseInt(routeResults.data[0].id)}') RETURNING *;`
      ).then(placeResults =>
        placeResults.error
          ? res.status(404).send({ placeError: placeResults.error })
          : res.send({ body: placeResults.data })
      );
    }
  });
>>>>>>> frontend changes
});

router.post("/api/v1/users", (req, res, next) => {
  getData(`SELECT id from users WHERE users.email = '${req.body.email}';`)
    .then(selectResults => {
      res.send({ body: selectResults.data[0].id });
    })
    .catch(selectError => {
      getData(`INSERT INTO users (email) VALUES ('${req.body.email}') RETURNING *;`)
        .then(results => {
          res.send({ body: results.data[0].id });
        })
        .catch(error => {
          res.status(404).send({ error: error });
        });
    });
});

module.exports = router;
