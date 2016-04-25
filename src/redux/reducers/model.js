import { DEFAULT_STATE } from '../../common/app-const';
import { __hasValue } from '../../common/common';
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/types';

const Model = (state = DEFAULT_STATE.model, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
        case FETCH_FAILURE:
        case FETCH_REQUEST: {
            return {
                ...state,
                [action.entity]: entity(
                    state[action.entity],
                    action
                )
            }
        }
        default: {
            return state;
        }
    }
};

const entity = (
    state = {
        isFetching: false,
        lastUpdated: undefined,
        data: {}
    },
    action
) => {
    switch(action.type) {
        case FETCH_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.data,
                lastUpdated: action.lastUpdated
            }
        }
        case FETCH_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                lastUpdated: action.lastUpdated
            }
        }
    }
    return state;
};


export default Model
