import React from 'react';
import ReactDOM from 'react-dom';
import babel from 'babel-polyfill';
import { Provider } from 'react-redux';
import { DEFAULT_STATE } from './common/app-const';
import configureStore from './redux/store/configure-store';
import common from './scss/common.scss';
import style from './scss/style.scss';
import RootContainer from './components/root';

const store = configureStore(DEFAULT_STATE);

ReactDOM.render(
    <Provider store={store} >
        <RootContainer />
    </Provider>,
    document.getElementById('patient-dashboard')
);
