import React from 'react';
import { connect } from 'react-redux';
import AjaxRequest from './ajax/ajax-request';
import CodeBlock from './common/code-block';
import Tabs from './tabs/tabs';
import Panel from './common/panel';
import Footer from './common/footer';

function App ({
    children,
    state,
    location
}) {
    return (
        <section style={style.container}>

            <h1>react-boilerplate&nbsp;</h1>
            <small>A slightly opinionated setup for ReactJS </small>

            <section style={style.flexRow}>

                { /* Render AJAX example */ }
                <Panel style={style.panel} title="Ajax Example">
                    <AjaxRequest />
                </Panel>

                { /* Render Redux state */ }
                <Panel style={style.panel} title="Redux State" >
                    <CodeBlock code={state} />
                </Panel>

            </section>

            <Panel title="Router Example">
                <Tabs activePath={location.pathname} >
                    { children }
                </Tabs>
            </Panel>

            <Footer />

        </section>
    )
}

const style = {
    container: {
        width: '100%',
        margin: 5
    },
    flexRow: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    panel: {
        flexGrow: 1,
        minWidth: 300
    }
};

export default connect(
    (state) => ({ state })
)(App)