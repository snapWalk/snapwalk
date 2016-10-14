import React from 'react';
import RouteContent from './RouteContent';
import { increment } from '../../../redux/actions/action-creators';
import { connect } from 'react-redux';

function Increment ({
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

export default connect(
    null,
    { increment: () => increment(1)}
)(Increment);