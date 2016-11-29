import React from 'react';
import App from './components/App';
import Increment from './components/examples/router/IncrementRoute';
import Decrement from './components/examples/router/DecrementRoute';
import Reset from './components/examples/router/ResetRoute';
import NotFound from './components/examples/router/common/NotFound';
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Increment} />
        <Route path='decrement' component={Decrement} />
        <Route path='reset' component={Reset} />
        <Route path='*' component={NotFound} />
    </Route>
);
