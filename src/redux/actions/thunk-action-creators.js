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
 * @param  {string}     entity                      Entity name. Consumed by the Reducer            (e.g `orders`, `todos`)
 * @param  {Promise}    dataPromise                 Promise that loads data from an external source (e.g. OrderService.getOrders())
 * @param  {boolean}    loadInBackground            Disable the FETCH_REQUEST action
 * @return {function}                               A function that loads data from an external
 *                                                  source, and dispatches event actions
 */
export const loadEntity = (
    entity,
    dataPromise,
    loadInBackground = false
) => {
    if (!dataPromise || !dataPromise.then)
        throw new Error('dataPromise must be a Promise, and cannot be null/undefined');

    return (dispatch) => {

        if (!loadInBackground) {
            /**
             * Set the `isFetching` property on the entity to `true`.
             * The UI can hook into the store to obtain this property
             * from the entity, and optionally display a spinner or loading
             * indicator to the end-user.
             *
             * A reason to pass `loadInBackground` as true would be to
             * inhibit this loading indicator, if configured. For instance,
             * perhaps only the spinner should show when the component is
             * mounting, but subsequent updates to the entity are done
             * silently in the background.
             *
             * Regardless of whether the promise resolves or rejects,
             * `isFetching` is always set back to false in the reducer
             * via apiSuccess or apiFailure.
             */
            dispatch(apiRequest(entity)());
        }

        return dataPromise
            .then(data => {
                // Dispatch success to update model state
                dispatch(
                    apiSuccess(entity)(data)
                )
            })
            .catch(error => {
                // Dispatch failure to notify UI
                dispatch(
                    apiFailure(entity)(error)
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
 * For demonstration purposes only. Normally this promise would
 * do something cool, like fetch data from a remote API.
 *
 * @param entity
 * @returns {Promise}
 */
function fakePromise() {
    return new Promise(resolve => {
        const delay = _getShortDelay();
        setTimeout(() => {
            resolve({delay})
        }, delay * 1000)
    });
}

function _getShortDelay() {
    return _getRandomDelayBetween(1, 3, 2);
}

function _getRandomDelayBetween(min, max, roundTo) {
    return Number(Math.random() * (max - min) + min).toFixed(roundTo);
}