import { combineReducers } from 'redux';
import { reducer } from 'redux-entity';
import counter from './counter';

export default combineReducers({
    model: reducer,
    counter
});
