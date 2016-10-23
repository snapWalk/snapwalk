import { combineReducers } from 'redux';
import { model } from 'redux-entity';
import counter from './counter';

export default combineReducers({
    model,
    counter
});
