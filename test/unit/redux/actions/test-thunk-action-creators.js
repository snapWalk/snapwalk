import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import * as actionCreators from '../../../../src/redux/actions/thunk-action-creators';
import { INITIAL_STATE } from '../../../../src/common/app-const';
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../../../../src/redux/actions/types';

// Set up mock Redux store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Thunk Action Creators', () => {

    let store, getState, entity;
    beforeEach(() => {
        entity = 'mockEntity';
        getState = INITIAL_STATE;
        store = mockStore(getState)
    });

    describe('loadEntity()', () => {
        describe('when loadEntity() succeeds', () => {
            it ('should dispatch FETCH_REQUEST and FETCH_SUCCESS actions', (done) => {

                const data = {foo: 'bar'};
                const promise = Promise.resolve(data);

                const expectedFetch = {
                    type: FETCH_REQUEST,
                    entity
                };

                const expectedSuccess = {
                    type: FETCH_SUCCESS,
                    lastUpdated: undefined,         // Overwrite this in assertion
                    entity,
                    data
                };

                // Under test
                store.dispatch(
                    actionCreators.loadEntity(entity, promise, false)
                )
                .then(() => {

                    // Assert 2 actions were invoked
                    const actions = store.getActions();
                    expect(actions.length).toEqual(2);

                    // Asset FETCH_REQUEST was well-formed
                    const request = actions[0];
                    expect(request).toEqual(expectedFetch);

                    // Assert timestamp is present and valid
                    const success = actions[1];
                    expect(success.lastUpdated).toExist();
                    expect(moment(success.lastUpdated).isValid()).toBe(true);

                    // Force timestamps to match for easier assertion
                    expectedSuccess.lastUpdated = success.lastUpdated;

                    // Assert FETCH_SUCCESS was well-formed
                    expect(success).toEqual(expectedSuccess);
                })
                .then(done)
                .catch(done);
            })
        });
        describe('when loadEntity() fails', () => {
            it ('should dispatch FETCH_REQUEST and FETCH_FAILURE actions', (done) => {

                const error = { message: 'foo' };
                const promise = Promise.reject(error);

                const expectedRequest = {
                    type: FETCH_REQUEST,
                    entity
                };

                const expectedFailure = {
                    type: FETCH_FAILURE,
                    lastUpdated: undefined,         // Overwrite this in assertion
                    entity,
                    error
                };

                // Under test
                store.dispatch(
                    actionCreators.loadEntity(
                        entity, promise, false
                    )
                )
                .then(() => {

                    // Assert 2 actions were invoked
                    const actions = store.getActions();
                    expect(actions.length).toEqual(2);

                    // Asset FETCH_REQUEST was well-formed
                    const request = actions[0];
                    expect(request).toEqual(expectedRequest);

                    // Assert timestamp is present and valid
                    const failure = actions[1];
                    expect(failure.lastUpdated).toExist();
                    expect(moment(failure.lastUpdated).isValid()).toBe(true);

                    // Force timestamps to match for easier assertion
                    expectedFailure.lastUpdated = failure.lastUpdated;

                    // Assert FETCH_FAILURE was well-formed
                    expect(failure).toEqual(expectedFailure);

                })
                .then(done)
                .catch(done);
            });
        });
        describe('when loadEntity() is invoked silently', () => {
            it ('should not dispatch a FETCH_REQUEST action', (done) => {

                const data = {foo: 'bar'};
                const promise = Promise.resolve(data);

                const expectedSuccess = {
                    type: FETCH_SUCCESS,
                    lastUpdated: undefined,         // Overwrite this in assertion
                    entity,
                    data
                };

                // Under test
                store.dispatch(
                    actionCreators.loadEntity(
                        entity, promise, true
                    )
                )
                .then(() => {

                    // Assert 1 action was invoked
                    const actions = store.getActions();
                    expect(actions.length).toEqual(1);

                    // Assert timestamp is present and valid
                    const success = actions[0];
                    expect(success.lastUpdated).toExist();
                    expect(moment(success.lastUpdated).isValid()).toBe(true);

                    // Force timestamps to match for easier assertion
                    expectedSuccess.lastUpdated = success.lastUpdated;

                    // Assert FETCH_SUCCESS was well-formed
                    expect(success).toEqual(expectedSuccess);
                })
                .then(done)
                .catch(done);

            });
        });
        describe('when loadEntity() is passed invalid arguments', () => {
            it ('should throw an error with an undefined data promise', () => {
                expect(() => {
                    store.dispatch(
                        actionCreators.loadEntity(
                            entity, undefined
                        )
                    )
                }).toThrow('dataPromise must be a Promise, and cannot be null/undefined');
            });
            it ('should throw an error when a promise is not passed', () => {
                expect(() => {
                    store.dispatch(
                        actionCreators.loadEntity(
                            entity, {}
                        )
                    )
                }).toThrow('dataPromise must be a Promise, and cannot be null/undefined');
            });
        });
    });
});
