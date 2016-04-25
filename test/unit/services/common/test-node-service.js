import expect from 'expect';
import NodeService from '../../../../src/services/common/node-service';

describe('NodeService', () => {

    const PREV_NODE_ENV = process.env;

    afterEach(() => {
        process.env = PREV_NODE_ENV;
    });

    describe('getNodeEnv()', () => {
        it('should return Node process info when defined', () => {
            const testEnv = {foo: 'bar'};
            process.env = testEnv;
            expect(
                NodeService.getNodeEnv()
            ).toEqual(testEnv);
        });
        it('should return undefined if Node process info is unavailable', () => {
            delete process.env;
            expect(
                NodeService.getNodeEnv()
            ).toEqual(undefined);
        });
    });
    describe('getNodeEnvByKey()', () => {
        it('should return the value assigned to the key', () => {

            // Create mock environment variables
            const key = 'foo';
            const value = 'bar';

            process.env[key] = value;

            expect(
                NodeService.getNodeEnvByKey(key)
            ).toEqual(value);
        });
        it('should return undefined if the object does not contain the key', () => {
            expect(
                NodeService.getNodeEnvByKey('foobaz')
            ).toBe(undefined);
        });
        it('should throw an error if the key provided is null/undefined', () => {
            expect(() => {
                NodeService.getNodeEnvByKey(undefined)
            }).toThrow('Key cannot be null/undefined');
        });
    });
    describe('getNodeEnvMode()', () => {
        it('should return the Node environment mode', () => {

            const mode = 'foobar';
            process.env.NODE_ENV = mode;

            expect(
                NodeService.getNodeEnvMode()
            ).toEqual(mode);
        });
        it('should return test mode NODE_ENV is undefined/null', () => {
            delete process.env.NODE_ENV;
            expect(
                NodeService.getNodeEnvMode()
            ).toEqual('test');
        });
    });
    describe('getXgConfig()', () => {
        it('should return the xG configuration', () => {
            const config = JSON.stringify({ "foo": "bar" });
            process.env.XG_CONFIG = config;

            expect(
                NodeService.getXgConfig()
            ).toEqual(config);
        });
        it('should return undefined if xG config is not present', () => {
            delete process.env.XG_CONFIG;
            expect(
                NodeService.getXgConfig()
            ).toBe(undefined);
        });
    });
    describe('hasXgConfig()', () => {
        it('should return true if xG configuration is present', () => {
            const config = JSON.stringify({ "foo": "bar" });
            process.env.XG_CONFIG = config;

            expect(
                NodeService.hasXgConfig()
            ).toBe(true);
        });
        it('should return false if xG configuration is not present', () => {
            delete process.env.XG_CONFIG;
            expect(
                NodeService.hasXgConfig()
            ).toBe(false);
        });
    });
    describe('isProduction()', () => {
        it('should return true if NODE_ENV is production', () => {
            process.env.NODE_ENV = 'production';
            expect(
                NodeService.isProduction()
            ).toBe(true);
        });
        it('should return false if NODE_ENV is not production', () => {
            process.env.NODE_ENV = 'foobar';
            expect(
                NodeService.isProduction()
            ).toBe(false);
        });
    });
    describe('isDevelopment()', () => {
        it('should return true if NODE_ENV is development', () => {
            process.env.NODE_ENV = 'development';
            expect(
                NodeService.isDevelopment()
            ).toBe(true);
        });
        it('should return false if NODE_ENV is not development', () => {
            process.env.NODE_ENV = 'foobar';
            expect(
                NodeService.isDevelopment()
            ).toBe(false);
        });
    });
    describe('isTest()', () => {
        it('should return true if NODE_ENV is test', () => {
            process.env.NODE_ENV = 'test';
            expect(
                NodeService.isTest()
            ).toBe(true);
        });
        it('should return false if NODE_ENV is not test', () => {
            process.env.NODE_ENV = 'foobar';
            expect(
                NodeService.isTest()
            ).toBe(false);
        });
        it('should return true if NODE_ENV is null/undefined', () => {
            delete process.env.NODE_ENV;
            expect(
                NodeService.isTest()
            ).toBe(true);
        });
    });
});