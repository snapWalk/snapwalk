import { loadEntity } from 'redux-entity';
import ExampleDomainService from '../../services/domain/example-domain-service';

/**
 * Thunk action that simulates ad delayed API call
 * @returns {Function}  thunk
 */
export function fetchFoo () {
    return loadEntity(
        'fooEntity',
        ExampleDomainService.getFakePromise()
    );
}

/**
 * Thunk action that simulates ad delayed API call
 * @returns {Function}  thunk
 */
export function fetchBar () {
    return loadEntity(
        'barEntity',
        ExampleDomainService.getFakePromise(),
        { append: true }
    );
}

/**
 * Thunk action that simulates ad delayed, failed API call
 * @returns {Function}  thunk
 */
export function fetchFail () {
    return loadEntity(
        'failEntity',
        ExampleDomainService.getFakePromise(true)
    );
}