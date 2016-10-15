import React from 'react';
import AjaxExample from './examples/ajax/AjaxExample';
import { connect } from 'react-redux';
import {
    Panel, JsonBlock, HeroHeading,
    Footer, TabMenu, TabContent,
    Row, Column, Container } from './common';

const width = 500;

function App ({
    children,
    state,
    location
}) {
    return (
        <Container>

            <HeroHeading
                title="react-boilerplate"
                subtitle="A slightly opinionated yet dead simple boilerplate for ReactJS" />

            <Row
                hAlignCenter={true}
                width="100%"
                style={{
                    flexWrap: 'wrap',
                    minWidth: width
                }}>

                { /* Render AJAX example */ }
                <Column>
                    <Panel
                        faIcon="download"
                        style={{width: 500}}
                        title="Ajax Example">
                        <AjaxExample />
                    </Panel>
                </Column>

                <Column>
                    { /* Render router example */ }
                    <Panel
                        title="Router Example"
                        faIcon="link"
                        style={{width}}>

                        <TabMenu
                            activePath={location.pathname}
                            items={[
                                { label: 'increment',   path: '/' },
                                { label: 'decrement',   path: '/decrement' },
                                { label: 'reset',       path: '/reset' },
                            ]}
                        />

                        { /* Render the active route */ }
                        { /* Check Routes.jsx along with your current URL to determine the rendered component! */ }
                        <TabContent>
                            { children }
                        </TabContent>
                    </Panel>

                    { /* Render Redux state */ }
                    <Panel
                        title="Redux State"
                        subtitle="Open the console to see the dispatched actions!"
                        faIcon="tree"
                        style={{width}}>
                        <JsonBlock content={state} />
                    </Panel>

                </Column>

            </Row>
            <Footer/>

        </Container>
    )
}

App.propTypes = {
    children: React.PropTypes.node.isRequired,
    state: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
};

export default connect(
    (state) => ({ state })
)(App);
