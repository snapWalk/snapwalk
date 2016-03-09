import React from 'react';
import ReactDOM from 'react-dom';
import babel from 'babel-polyfill';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { DEFAULT_STATE } from './common/app-const';
import configureStore from './redux/store/configure-store';
import common from './scss/common.scss';
import style from './scss/style.scss';
import RootContainer from './components/root';
import IndexContainer from './components/index';
import FooContainer from './components/foo';

const store = configureStore(DEFAULT_STATE);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store} >
        <Router history={history}>
            <Route path="/" component={RootContainer}>
                <IndexRoute component={IndexContainer} />
                <Route path="/foo" component={FooContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('patient-dashboard')
);
