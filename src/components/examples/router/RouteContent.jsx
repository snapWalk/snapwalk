import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Flexbox, Bullet } from '../../common/index';
import { ROUTES } from '../../../common/app-const';

function RouteContent (props) {
    return (
        <Flexbox column={true} padding={10}>
            <Flexbox vAlignCenter={true}>
                <Bullet/>
                <code>counter</code>: <code>{props.counter}</code>
            </Flexbox>
            <Flexbox vAlignCenter={true}>
                <Bullet/>
                You are at the <code>{props.path || '/'}</code> route
            </Flexbox>
            <button
                className="button-primary"
                onClick={props.dispatch.bind(this, props.action())}>
                {props.label}
            </button>
        </Flexbox>
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
