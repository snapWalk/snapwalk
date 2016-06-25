import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/action-creators';

function Index ({
    increment
}) {
    return (
        <div>
            <h6>
                You are at the <strong>Index</strong> component:&nbsp; 
                <code>('/')</code>
            </h6>
            <button
                className="button-primary"
                onClick={increment}>
                increment counter
            </button>
        </div>
    );
}

export default connect(
    null,
    { increment: () => increment(1)}
)(Index)