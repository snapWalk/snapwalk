import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../../redux/actions/action-creators';

function Bar ({
    reset
}) {
    return (
        <div>
            <h6>
                You are at the <strong>Bar</strong> component:&nbsp;
                <code>('/bar')</code>
            </h6>
            <button
                className="button-primary"
                onClick={reset}>
                reset counter
            </button>
        </div>
    );
};

export default connect(
    null,
    { reset: () => reset() }
)(Bar)