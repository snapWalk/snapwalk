'use strict';

let svc;
module.exports = svc = {
    getNodeEnv: function () {
        return process.env;
    },
    getNodeEnvByKey: function (key) {
        if (!key) throw new Error('Key cannot be null/undefined');
        return svc.getNodeEnv()[key];
    },
    getNodeEnvMode: function () {
        let mode = svc.getNodeEnvByKey('NODE_ENV');
        if (!mode) {
            // TODO: Set NODE_ENV within Istanbul so this isn't necessary
            mode = 'test';
            process.env['NODE_ENV'] = mode;
        }
        return mode;
    },
    isProduction: function () {
        return svc.getNodeEnvMode() === 'production';
    },
    isDevelopment: function () {
        return svc.getNodeEnvMode() === 'development';
    },
    isTest: function () {
        return svc.getNodeEnvMode() === 'test';
    }
};
