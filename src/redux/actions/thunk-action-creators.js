import {
    apiRequest,
    apiSuccess,
    apiFailure
} from './action-creators';

/**
 * Redux thunk action creator for making asynchronous API calls. This thunk
 * dispatches at least two actions: the first being the FETCH_REQUEST action,
 * which notifies the UI that fetching is occurring. The second action is dispatched
 * when either the API call succeeds or fails.
 *
 * More on Redux Thunk: https://github.com/gaearon/redux-thunk
 *
 * @param  {string}     name        Entity name
 * @param  {Promise}    promise     Promise that loads data from an external source (e.g. OrderService.getOrders())
 * @param  {boolean}    silent      Disable the FETCH_REQUEST action,
 * @return {function}               A function that loads data from an external source, and dispatches actions
 */
export const loadEntity = (
    name,
    promise,
    silent = false
) => {
    if (!promise || !promise.then)
        throw new Error('promise must be a Promise, and cannot be null/undefined');

    return (dispatch) => {

        if (!silent) {
            /**
             * Set the `isFetching` property on the entity to `true`.
             * The UI can hook into the store to obtain this property
             * from the entity, and optionally display a spinner or loading
             * indicator to the end-user.
             *
             * A reason to pass `silent` as true would be to
             * inhibit this loading indicator, if configured. For instance,
             * perhaps only the spinner should show when the component is
             * mounting, but subsequent updates to the entity are done
             * silently in the background.
             *
             * Regardless of whether the promise resolves or rejects,
             * `isFetching` is always set back to false in the reducer
             * via apiSuccess or apiFailure.
             */
            dispatch(apiRequest(name)());
        }

        return promise
            .then(data => {
                // Dispatch success to update model state
                dispatch(
                    apiSuccess(name)(data, Date.now())
                )
            })
            .catch(error => {
                // Dispatch failure to notify UI
                dispatch(
                    apiFailure(name)(error, Date.now())
                )
            })
    }
};

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