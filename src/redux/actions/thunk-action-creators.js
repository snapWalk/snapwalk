import { loadEntity } from 'redux-entity';

/**
 * Thunk action that simulates ad delayed API call
 * @returns {Function}  thunk
 */
export function fetchFoo() {
    return loadEntity(
        'fooEntity',
        fakePromise()
    );
}

/**
 * Thunk action that simulates ad delayed API call
 * @returns {Function}  thunk
 */
export function fetchBar() {
    return loadEntity(
        'barEntity',
        fakePromise()
    );
}

/**
 * Thunk action that simulates ad delayed, failed API call
 * @returns {Function}  thunk
 */
export function fetchFail() {
    return loadEntity(
        'failEntity',
        fakePromise(true)
    );
}

/**
 * For demonstration purposes only. Normally this promise would
 * do something cool, like fetch data from a remote API.
 *
 * @param entity
 * @returns {Promise}
 */
function fakePromise(doReject) {
    return new Promise((resolve, reject) => {
        const delay = _getShortDelay();
        setTimeout(() => {
            doReject
                ? reject({message: 'Error fetching data!'})
                : resolve({delay});
        }, delay * 1000)
    });
}

function _getShortDelay() {
    return _getRandomDelayBetween(1, 3, 2);
}

function _getRandomDelayBetween(min, max, roundTo) {
    return Number(Math.random() * (max - min) + min).toFixed(roundTo);
}