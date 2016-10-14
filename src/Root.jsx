import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router'
import routes from './Routes';

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
