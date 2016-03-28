import React from 'react';
import ReactDOM from 'react-dom';
import babel from 'babel-polyfill';
import { Router, Route, IndexRoute  } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import common from './scss/common.scss';
import style from './scss/style.scss';
import routes from './routes';



ReactDOM.render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('patient-dashboard')
);
