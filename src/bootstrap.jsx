import React from 'react';
import ReactDOM from 'react-dom';
import babel from 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from './scss/style.scss';
import routes from './routes';
import configureStore from './redux/store/configure-store';
import { DEFAULT_STATE } from './common/app-const';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


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
