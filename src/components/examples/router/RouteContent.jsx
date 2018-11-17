import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Flex from '../../common/glamorous/Flex';
import Icon from '../../common/Icon';
import { ROUTES } from '../../../common/app-const';

const __isRouteMatch = (pathname, test) => {
  if (!pathname || !test) return false;
  return pathname.indexOf(test) !== -1;
};

const __getRouteProps = (pathname) => {
  const route = ROUTES.find(route => {
    if (__isRouteMatch(pathname, route.path)) {
      return route;
    }
  });
  return route || ROUTES[0];
};

const RouteContent = ({
  path,
  label,
  counter,
  dispatch,
  action,
  icon
}) => {
  return (
    <Flex column={true} padding={10}>
      <Flex vAlignCenter={true}>
        <Icon icon="angle-right"/>
        &nbsp;Connected to the Redux store at the&nbsp;<code>{path || '/'}</code>&nbsp;route
      </Flex>
      <Flex vAlignCenter={true}>
        <Icon icon="angle-right"/>
        &nbsp;<code>counter</code>: <code>{counter}</code>
      </Flex>
      <br/>
      <div className="m-top--small">
        <button
          className="button"
          onClick={dispatch.bind(this, action())}>
          <Icon icon={icon}/>&nbsp;{label} counter
        </button>
      </div>
    </Flex>
  );
};

RouteContent.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dispatch: PropTypes.func.issRequired
};

export default connect(
  (state, ownProps) => {
    return {
      ...__getRouteProps(ownProps.location.pathname),
      ...{ counter: state.counter }
    };
  }
)(RouteContent);
