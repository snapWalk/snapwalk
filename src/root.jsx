import React from 'react';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { Router, useRouterHistory  } from 'react-router'
import routes from './routes';

const browserHistory = useRouterHistory(createHistory)({
    basename: '/dist'
});

export default function Root ({
    store
}) {
    return (
        <Provider store={store}>
            <Router
                routes={routes}
                history={browserHistory}
            />
        </Provider>
    )
}
