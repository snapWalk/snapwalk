import { DEFAULT_STATE } from '../../common/app-const';

const defaultState = DEFAULT_STATE.model;

const Model = (state = defaultState, action) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
}
