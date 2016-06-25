import React from 'react';
import CounterAction from './counter-action';
import { connect } from 'react-redux';
import { decrement } from '../../redux/actions/action-creators';

function Decrement ({
    decrement
}) {
    return (
        <CounterAction
            label="Decrement"
            path="/decrement"
            action={decrement}
        />
    );
}

export default connect(
    null,
    { decrement }
)(Decrement);