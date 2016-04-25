'use strict';

const common = require('../src/common/common');

if (common.__hasValue(process.env.ENV_CONFIG_PATH)) {
    module.exports = require(process.env.ENV_CONFIG_PATH);
} else {
    module.exports = require('./config.default.json');
}