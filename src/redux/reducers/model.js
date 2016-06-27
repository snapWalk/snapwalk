import { INITIAL_STATE } from '../../common/app-const';
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    RESET_ENTITY,
    DELETE_ENTITY
} from '../actions/types';

const model = (state = INITIAL_STATE.model, action) => {
    switch(action.type) {
        case DELETE_ENTITY: {
            delete state[action.entity];
            return {
                ...state
            }
        }
        case RESET_ENTITY:  // fall through
        case FETCH_SUCCESS: // fall through
        case FETCH_FAILURE: // fall through
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

const INITIAL_ENTITY_STATE = {
    isFetching: false,
    lastUpdated: undefined,
    data: {}
};

const entity = (
    state = INITIAL_ENTITY_STATE,
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
                lastUpdated: Date.now()
            }
        }
        case FETCH_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                lastUpdated: Date.now()
            }
        }
        case RESET_ENTITY: {
            return {
                ...INITIAL_ENTITY_STATE,
                lastUpdated: Date.now()
            }
        }                
        default: {
            return state;
        }
    }
};


export default model;
