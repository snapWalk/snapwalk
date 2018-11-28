"use strict";

const config = require("./config/config");
const NodeService = require("./src/services/common/node-service");

const { example } = config;
if (!example) throw new Error("configuration cannot be null/undefined");

const PORT = example.port;

if (NodeService.isProduction()) {
  const express = require("express");
  const path = require("path");
  const bodyParser = require("body-parser");
  const routes = require("./src/services/routes/index");
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "/dist")));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    // eslint-disable-next-line no-unused-expressions
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.contentType("application/json");
    next();
  });

  app.use("/", routes);

  // Configure server-side routing
  app.get("*", (req, res) => {
    const dist = path.join(__dirname, "/dist/index.html");
    res.sendFile(dist);
  });

  // Open socket
  app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
  });
} else {
  const webpack = require("webpack");
  const WebpackDevServer = require("webpack-dev-server");
  const config = require("./webpack.config.js");

  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true
  }).listen(PORT, "localhost", error => {
    console.log(error || `Started WebpackDevServer on port ${PORT}`);
  });
}
