import React from 'react';
import CounterAction from './counter-action';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/action-creators';

function Increment ({
    increment
}) {
    return (
        <CounterAction
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