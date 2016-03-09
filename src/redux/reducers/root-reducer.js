import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import model from './model';

export default combineReducers({
    model,
    routing: routerReducer
});
