'use strict';

const CONFIG_PATH = process.env.ENV_CONFIG_PATH || './config.default.json';
module.exports = require(CONFIG_PATH);
