import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './redux/store/configure-store';
import { INITIAL_STATE } from './common/app-const';
import babel from 'babel-polyfill';
import styles from './scss/style.scss';
import _ from 'lodash';

ReactDOM.render(
    <Root store={configureStore(INITIAL_STATE)} />,
    document.getElementById('example-app')
);