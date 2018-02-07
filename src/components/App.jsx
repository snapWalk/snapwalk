import React from 'react';
import { withRouter } from 'react-router-dom';

import ReduxEntity from './examples/redux-entity/ReduxEntity';
import ReduxState from './examples/ReduxState';
import TabbedRouter from './examples/router/TabbedRouter';

import Icon from './common/Icon';
import Navbar from './common/bulma/Navbar';
import Footer from './Footer';
import Hero from './common/bulma/Hero';
import Columns from './common/bulma/Columns';
import Flex from './common/glamorous/Flex';

const COLUMN_MAP = {
    ROUTER: {
        title     : 'Router',
        subtitle  : <span>Utilizes <a href="https://github.com/ReactTraining/react-router">react-router</a>&nbsp;v4 for client-side routing</span>,
        icon      : 'link',
        getContent: (location, history) => <TabbedRouter location={location} history={history} />
    },
    STATE_MANAGEMENT: {
        title     : 'State Management',
        subtitle  : <span>Utilizes&nbsp;<a href="https://github.com/mikechabot/redux-entity">redux-entity</a>&nbsp;for domain entity management</span>,
        icon      : 'sitemap',
        iconPrefix: 'fas',
        getContent: () => <ReduxEntity />
    },
    REDUX_STATE: {
        title     : 'State Tree',
        subtitle  : 'Open devtools to view dispatched actions',
        icon      : 'tree',
        getContent: () => <ReduxState />
    }
};

function App ({ location, history }) {
    return (
        <Flex column height="100%" width="100%" justifyContent="space-between">
            <div>
                { _renderHeader() }
            </div>
            <div>
                { _renderBody(location, history) }
            </div>
            <div>
                { _renderFooter() }
            </div>
        </Flex>
    );
}

function _renderHeader () {
    return (
        <Navbar brand={{
            icon : 'cloud',
            url  : 'http://www.github.com/mikechabot/react-boilerplate',
            label: 'react-boilerplate'
        }}/>
    );
}

function _renderBody (location, history) {
    const { ROUTER, STATE_MANAGEMENT, REDUX_STATE } = COLUMN_MAP;
    return (
        <Hero
            content={(
                <div>

                    { /* Render router example */ }
                    <Columns
                        columns={[
                            (
                                <span key={1}>
                                    { _renderTitleAndSubtitle(ROUTER.title, ROUTER.subtitle, ROUTER.icon, ROUTER.iconPrefix)}
                                    { ROUTER.getContent(location, history) }
                                </span>
                            )]}
                    />

                    { /* Render AJAX example with redux-entity, and display Redux state */ }
                    <Columns
                        columns={[
                            (
                                <span key={1}>
                                    { _renderTitleAndSubtitle(STATE_MANAGEMENT.title, STATE_MANAGEMENT.subtitle, STATE_MANAGEMENT.icon)}
                                    { STATE_MANAGEMENT.getContent(location, history) }
                                </span>
                            ),
                            (
                                <span key={2}>
                                    { _renderTitleAndSubtitle(REDUX_STATE.title, REDUX_STATE.subtitle, REDUX_STATE.icon)}
                                    <ReduxState />
                                </span>
                            )
                        ]}
                    />
                </div>
            )}
        />
    );
}

function _renderFooter () {
    return <Footer />;
}

function _renderTitleAndSubtitle (title, subtitle, icon, iconPrefix) {
    return (
        <div>
            <h1 className="title is-size-4-desktop is-size-5-mobile is-size-5-tablet">
                <Icon icon={icon} className="has-text-info" prefix={iconPrefix} />&nbsp;{title}
            </h1>
            <h2 className="subtitle is-size-6-desktop is-size-7-mobile is-size-7-tablet">
                <Icon icon="angle-right"/>&nbsp;
                {subtitle}
            </h2>
        </div>
    );
}

export default withRouter(App);
