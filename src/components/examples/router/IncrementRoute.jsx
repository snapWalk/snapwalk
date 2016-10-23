import React from 'react';
import RouteContent from './common/RouteContent';
import { increment } from '../../../redux/actions/action-creators';
import { connect } from 'react-redux';

function IncrementRoute ({
    increment
}) {
    return (
        <RouteContent
            label="Increment"
            path="/"
            action={increment}
        />
    )
}

IncrementRoute.propTypes = {
    increment: React.PropTypes.func.isRequired
};

export default connect(
    null,
    { increment: () => increment(1)}
)(IncrementRoute);