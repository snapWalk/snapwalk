import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../../redux/actions/action-creators';

function Decrement ({
    decrement
}) {
    return (
        <div>
            <h6>
                You are at the <strong>Decrement</strong> route component:&nbsp;
                <code>('/decrement')</code>
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
    { decrement }
)(Decrement)