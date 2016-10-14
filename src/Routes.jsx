import React from 'react';
import App from './components/App';
import Increment from './components/examples/router/Increment';
import Decrement from './components/examples/router/Decrement';
import Reset from './components/examples/router/Reset';
import NotFound from './components/examples/router/NotFound';
import { Route, IndexRoute } from 'react-router'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Increment} />
        <Route path="decrement" component={Decrement} />
        <Route path="reset" component={Reset} />
        <Route path="*" component={NotFound} />
    </Route>
)
