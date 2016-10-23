import React from 'react';
import { connect } from 'react-redux';

function Content ({
    label,
    path,
    action,
    counter
}) {
    return (
        <div>
            <div>
                Counter: <code>{ counter }</code>
            </div>
            <div>
                You are at the <em>{label}</em> component: <code>('{path}')</code>
            </div>
            <button
                className="button-primary"
                onClick={action}>
                {label}
            </button>
        </div>
    )
}

Content.propTypes = {
    label: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired,
    action: React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired
};

export default connect(
    (state, ownProps) => ({
        counter: state.counter,
        path: ownProps.path,
        label: ownProps.label
    }),
    null
)(Content);
