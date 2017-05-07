import PropTypes from 'prop-types';
import React from 'react';
import ReduxEntity from './examples/redux-entity/ReduxEntity';
import ReduxState from './examples/ReduxState';
import { connect } from 'react-redux';
import {
    Bullet, Panel, HeroHeading,
    Footer, TabMenu, TabContent,
    Flexbox
} from './common';

function App ({
    children,
    state,
    location
}) {
    return (
        <div style={{height: '100%', width: '100%'}}>

            <HeroHeading
                title="react-boilerplate"
                subtitle="A slightly opinionated yet dead simple boilerplate for ReactJS" />

            <Flexbox
                hAlignCenter={true}
                width="100%"
                style={{
                    flexWrap: 'wrap',
                    minWidth: 500
                }}>

                <Flexbox column={true}>

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
                        <TabMenu
                            activePath={location.pathname}
                            items={[
                                { label: 'increment', path: '/' },
                                { label: 'decrement', path: '/decrement' },
                                { label: 'reset', path: '/reset' }
                            ]}
                        />
                        { /* Render the active route */ }
                        { /* Check Routes.jsx along with your current URL to determine the rendered component! */ }
                        <TabContent>
                            { children }
                        </TabContent>
                    </Panel>
                </Flexbox>

                <Flexbox>
                    { /* Render Redux state */ }
                    <Panel
                        faIcon="tree"
                        title="Redux State">
                        <Bullet />
                        Open devtools to see the dispatched actions
                        <ReduxState state={state} />
                    </Panel>
                </Flexbox>

        </Flexbox>
        <Footer/>
    </div>
    );
}

App.propTypes = {
    children: PropTypes.node.isRequired,
    state   : PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default connect(
    (state) => ({ state })
)(App);
