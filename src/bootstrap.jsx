import React from 'react';
import ReactDOM from 'react-dom';
import babel from 'babel-polyfill';
import styles from './scss/style.scss';
import configureStore from './redux/store/configure-store';
import { DEFAULT_STATE } from './common/app-const';
import Root from './root';

ReactDOM.render(
    <Root store={configureStore(DEFAULT_STATE)} />,
    document.getElementById('example-app')
);
