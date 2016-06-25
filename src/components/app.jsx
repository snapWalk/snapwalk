import React from 'react';
import ReduxState from './redux-state';
import Routes from './routes';

export default function App({
    children,
    location
}) {
    return (
        <section style={style}>

            <h1>react-boilerplate</h1>

            { /* Render Redux state */ }
            <ReduxState />

            { /* Render route content */ }
            <Routes activePath={location.pathname} >
                { children }
            </Routes>

        </section>
    )
}

const style = {
    width: '100%'
};