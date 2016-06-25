import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../../redux/actions/action-creators';

function Foo ({
    decrement
}) {
    return (
        <div>
            <h6>
                You are at the <strong>Foo</strong> component:&nbsp;
                <code>('/foo')</code>
            </h6>
            <button
                className="button-primary"
                onClick={decrement}>
                decrement counter
            </button>
        </div>
    );
};

export default connect(
    null,
    { decrement: () => decrement(1)}
)(Foo)