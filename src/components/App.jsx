import React from 'react';
import AjaxRequest from './examples/ajax/AjaxRequest';
import { TabMenu, TabContent } from './common/tabs';
import { Panel, CodeBlock, HeroHeading, Footer } from './common';
import { Container, Row, Column } from './common/container';
import { connect } from 'react-redux';

function App ({
    children,
    state,
    location
}) {
    return (
        <Container>

            <HeroHeading
                title="react-boilerplate"
                subtitle="A slightly opinionated setup for ReactJS" />

            <Row
                hAlignCenter={true}
                width="100%"
                style={{
                    flexWrap: 'wrap',
                    minWidth: 500
                }}>

                { /* Render AJAX example */ }
                <Column>
                    <Panel
                        faIcon="download"
                        style={{width: 500}}
                        title="Ajax Example">
                        <AjaxRequest />
                    </Panel>
                </Column>

                <Column>
                    { /* Render router example */ }
                    <Panel
                        title="Router Example"
                        faIcon="link"
                        style={{width: 500}}>

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
                        faIcon="tree"
                        style={{width: 500}}>
                        <CodeBlock code={state} />
                    </Panel>

                </Column>

            </Row>
            <Footer/>

        </Container>
    )
}

export default connect(
    (state) => ({ state })
)(App);
