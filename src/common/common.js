'use strict';

const router = require('react-router');

module.exports = {
    __hasValue: function(val) {
        return val !== undefined && val !== null;
    },
    /**
     * Thunk for changing routes
     * @param path
     * @returns {function()}
     */
    __goToPath: function(path) {
        return function() {
            router.browserHistory.push(path);
        }
    }
};