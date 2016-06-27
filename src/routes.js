import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './components/app';
import Increment from './components/routes/increment';
import Decrement from './components/routes/decrement';
import Reset from './components/routes/reset';
import NotFound from './components/routes/not-found';

export default (
    <Route path="/dist" component={App}>
        <IndexRoute component={Increment} />
        <Route path="/decrement" component={Decrement} />
        <Route path="/reset" component={Reset} />
        <Route path="*" component={NotFound} />
    </Route>
)