import React from 'react';
import ReactDOM from 'react-dom';
import babel from 'babel-polyfill';
import styles from './scss/style.scss';
import routes from './routes';
import configureStore from './redux/store/configure-store';
import { DEFAULT_STATE } from './common/app-const';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'

// Configure the Redux store
const store = configureStore(DEFAULT_STATE);

ReactDOM.render(
    <Provider store={store}>
        <Router
            routes={routes}
            history={browserHistory}
        />
    </Provider>,
    document.getElementById('example')
);
