import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Flex from '../../common/glamorous/Flex';
import Icon from '../../common/Icon';
import { ROUTES } from '../../../common/app-const';

function RouteContent (props) {
    return (
        <Flex column={true} padding={10}>
            <Flex vAlignCenter={true}>
                <Icon icon="angle-right" />
                &nbsp;Connected to the Redux store at the&nbsp;<code>{props.path || '/'}</code>&nbsp;route
            </Flex>
            <Flex vAlignCenter={true}>
                <Icon icon="angle-right" />
                &nbsp;<code>counter</code>: <code>{props.counter}</code>
            </Flex>
            <br />
            <div className="m-top--small">
                <button
                    className="button"
                    onClick={props.dispatch.bind(this, props.action())}>
                    <Icon icon={props.icon} />&nbsp;{props.label} counter
                </button>
            </div>
        </Flex>
    );
}

function __isRouteMatch (pathname, test) {
    if (!pathname || !test) return false;
    return pathname.indexOf(test) !== -1;
}

function __getRouteProps (pathname) {
    const route = ROUTES.find(route => {
        if (__isRouteMatch(pathname, route.path)) {
            return route;
        }
    });
    return route || ROUTES[0];
}

RouteContent.propTypes = {
    label  : PropTypes.string.isRequired,
    action : PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    path   : PropTypes.string
};

export default connect(
    (state, ownProps) => {
        return {
            ...__getRouteProps(ownProps.location.pathname),
            ...{ counter: state.counter }
        };
    }
)(RouteContent);
