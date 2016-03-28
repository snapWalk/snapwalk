import React from 'react';
import { Route, IndexRoute } from 'react-router'
import RootContainer from './components/root';
import IndexContainer from './components/index';
import FooContainer from './components/foo';

export default (
    <Route path="/" component={RootContainer}>
        <IndexRoute component={IndexContainer} />
        <Route path="/foo" component={FooContainer} />
    </Route>
)