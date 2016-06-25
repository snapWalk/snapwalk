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
 * @param  {string}     entity              Entity name. Consumed by the Reducer
 * @param  {Promise}    dataPromise         Promise that loads data from an external source
 * @param  {boolean}    isLoadedSilently    Disable the FETCH_REQUEST action
 * @return {function}                       A function that loads data from an external
 *                                          source, and dispatches event actions
 */
export const loadEntity = (
    entity,
    dataPromise,
    isLoadedSilently
) => {
    if (!dataPromise || !dataPromise.then)
        throw new Error('dataPromise must be a Promise, and cannot be null/undefined');

    return (dispatch) => {

        // Notify the UI of fetching
        if (!isLoadedSilently) {
            dispatch(apiRequest(entity)());
        }

        return dataPromise
            .then(data => {
                // Dispatch success to update model state
                dispatch(
                    apiSuccess(entity)(data, Date.now())
                )
            })
            .catch(error => {
                // Dispatch failure to notify UI
                dispatch(
                    apiFailure(entity)(error, Date.now())
                )
            })
    }
};

/**
 * Simulate an API request using loadEntity() and setTimeout()
 * @returns {Function}
 */
export function fetchFakeData() {
    return loadEntity(

        // The domain/entity/object name (e.g. orders)
        'fooEntity',

        // Data promise (e.g. OrderService.getOrders())
        new Promise(resolve => {
            const delay = _getRandomDelayBetween(1, 3, 2);
            setTimeout(() => {
                resolve(`Simulated ${delay}s delay for fake API call`)
            }, delay * 1000)
        }),

        // Disable silent loading. This means loadEntity() will toggle
        // the 'isFetching' property on `fooEntity` during the promise
        // request. The UI can then hook into the store to obtain this
        // property to optionally display a spinner / load indicator.
        false
    );
}

function _getRandomDelayBetween(min, max, roundTo) {
    return Number(Math.random() * (max - min) + min).toFixed(roundTo);
}