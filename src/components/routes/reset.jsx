import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../../redux/actions/action-creators';

function Reset ({
    reset
}) {
    return (
        <div>
            <h6>
                You are at the <strong>Reset</strong> route component:&nbsp;
                <code>('/reset')</code>
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
    { reset }
)(Reset)