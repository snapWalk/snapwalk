import { combineReducers } from 'redux';
import model from './model';
import counter from './counter';

export default combineReducers({
    model,
    counter
});
