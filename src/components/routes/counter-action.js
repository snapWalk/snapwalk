import React from 'react';
import { connect } from 'react-redux';

function CounterAction({
    label,
    path,
    counter,
    action
}) {
    return (
        <section>
            <h6>
                You are at the <em>{label}</em> component:&nbsp;
                <code>('{path}')</code>
            </h6>
            <h6>Counter:
                <code>{ counter }</code>
            </h6>
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
)(CounterAction);
