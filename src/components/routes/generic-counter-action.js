import React from 'react';
import { connect } from 'react-redux';

function GenericCounterAction ({
    label,
    path,
    action,
    counter
}) {
    return (
        <section>
            <div>
                Counter:&nbsp;
                <code>{ counter }</code>
            </div>
            <div>
                You are at the <em>{label}</em> component:&nbsp;
                <code>('{path}')</code>
            </div>
            <button
                className="button-primary"
                onClick={action}>
                {label} counter
            </button>
        </section>
    )
}

export default connect(
    (state, ownProps) => ({
        counter: state.counter,
        path: ownProps.path,
        label: ownProps.label
    }),
    null
)(GenericCounterAction);
