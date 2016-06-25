import React from 'react';
import { connect } from 'react-redux';
import AjaxRequest from './ajax-request';
import CodeBlock from './common/code-block';
import Tabs from './tabs/tabs';
import Panel from './common/panel';

function App({
    children,
    state,
    location
}) {
    return (
        <section style={style}>

            <h1>react-boilerplate</h1>

            { /* Render Redux state */ }
            <Panel title="Redux State" >
                <CodeBlock code={state} />
            </Panel>

            { /* Render AJAX example */ }
            <Panel title="Ajax Example">
                <AjaxRequest />
            </Panel>

            <Panel title="Router Example">
                <Tabs activePath={location.pathname} >
                    { children }
                </Tabs>
            </Panel>

        </section>
    )
}

const style = {
    width: '100%'
};

export default connect(
    (state) => ({ state })
)(App)