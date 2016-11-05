import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import Root from './Root';
import configureStore from './redux/store/configure-store';
import { INITIAL_STATE } from './common/app-const';
import babel from 'babel-polyfill';
import styles from './scss/style.scss';
import _ from 'lodash';

const store = configureStore(INITIAL_STATE);

ReactDOM.render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById('example-app')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextApp = require('./Root').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp store={store}/>
            </AppContainer>,
            document.getElementById('example-app')
        );
    });
}