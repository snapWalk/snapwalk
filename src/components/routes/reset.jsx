import React from 'react';
import CounterAction from './generic-counter-action';
import { connect } from 'react-redux';
import { reset } from '../../redux/actions/action-creators';

function Reset ({
    reset
}) {
    return (
        <CounterAction
            label="Reset"
            path="/reset"
            action={reset}
        />
    );
}

export default connect(
    null,
    { reset }
)(Reset);