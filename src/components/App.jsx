import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'react-tabify';

import ReduxEntity from './examples/redux-entity/ReduxEntity';
import ReduxState from './examples/ReduxState';
import RouteContent from './examples/router/RouteContent';
import Flex from './common/glamorous/Flex';
import HeroHeading from './common/display/HeroHeading';
import Footer from './Footer';
import { Bullet, Panel } from './common';

function App ({ location, history }) {
    return (
        <div style={{height: '100%', width: '100%'}}>

            <HeroHeading
                title="react-boilerplate"
                subtitle="A slightly opinionated yet dead simple boilerplate for ReactJS"
            />

            <Flex
                hAlignCenter={true}
                width="100%"
                style={{
                    flexWrap: 'wrap',
                    minWidth: 500
                }}>

                <Flex column={true}>

                    { /* Render AJAX example */ }
                    <Panel
                        faIcon="cloud"
                        title="redux-entity">
                        <ReduxEntity />
                    </Panel>

                    { /* Render router example */ }
                    <Panel
                        faIcon="link"
                        title="Router example">
                        <Tabs
                            theme={{
                                main: {
                                    color: '#546E7A'
                                }
                            }}
                            id="router-example-tabs"
                            activeKey={location.pathname}
                            onSelect={(eventKey) => history.push(eventKey)}>
                            <Tab eventKey="/" label="Increment">
                                <Route exact path="/" component={RouteContent}/>
                            </Tab>
                            <Tab eventKey="/decrement" label="Decrement">
                                <Route path="/decrement" component={RouteContent}/>
                            </Tab>
                            <Tab eventKey="/reset" label="Reset">
                                <Route path="/reset" component={RouteContent}/>
                            </Tab>
                        </Tabs>
                    </Panel>
                </Flex>

                { /* Render Redux state */ }
                <Flex>
                    <Panel
                        faIcon="tree"
                        title="Redux State">
                        <Bullet />
                        Open devtools to see the dispatched actions
                        <ReduxState />
                    </Panel>
                </Flex>

            </Flex>
            <Footer/>
        </div>
    );
}

export default withRouter(App);
