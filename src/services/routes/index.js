const express = require('express');
const router = express.Router();
const path = require('path');
const getData = require("../common/database-access");

router.get('/', (req, res, next) => {
  res.sendFile(path.join(
    __dirname, '..', '..', 'dist', 'index.html'));
});

router.get('/api/v1/hello', (req, res, next) => {
  res.send({ message: "Hello world!"});
});

module.exports = router;

