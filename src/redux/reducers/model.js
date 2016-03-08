import { DEFAULT_STATE } from '../../common/app-const';

const Model = (state = DEFAULT_STATE.model, action) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
}

export default Model;
