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
});

// router.post('/api/v1/create', (req, res, next) => {
//   getData(`INSERT INTO items () VALUES ('${req.body.name}', ${req.body.description}) RETURNING *;`)
//     .then(results => results.error
//       ? res.status(404).send({ error: results.error })
//       : res.send({ body: results.data })
//     );
// });

module.exports = router;
