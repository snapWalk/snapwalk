'use strict';

const DomainObjectService = require('./domain-object-service');
const NodeUtils = require('./node-service');
const config = require('../../config/config');

module.exports = {
    getConfig() {
        return config;
    },
    getProperty(key) {
        if (!key) throw new Error('Key cannot be null/undefined');
        return DomainObjectService.getPropertyValue(
            this.getConfig(), key
        );
    },
    getRequiredProperty(key) {
        const value = this.getProperty(key);
        if (value) return value;
        if (!NodeUtils.isTest()) {
            throw new Error(`Missing required property: "${key}"`);
        }
    },
    getPort() {
        return this.getRequiredProperty('example.port');
    },
    getBaseUrl() {
        return this.getRequiredProperty('example.baseUrl');
    }
};