import React from 'react';
import { Flexbox, Bullet } from '../../../common';
import { connect } from 'react-redux';

function Content ({
    label,
    path,
    action,
    counter
}) {
    return (
        <Flexbox column={true} style={{padding: '0 5px'}}>
            <Flexbox vAlignCenter={true}>
                <Bullet/>
                <code>counter</code>: <code>{ counter }</code>
            </Flexbox>
            <Flexbox vAlignCenter={true}>
                <Bullet/>
                You are at the <code>('{path}')</code> route
            </Flexbox>
            <button
                className="button-primary"
                onClick={action}>
                {label}
            </button>
        </Flexbox>
    );
}

Content.propTypes = {
    label  : React.PropTypes.string.isRequired,
    path   : React.PropTypes.string.isRequired,
    action : React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired
};

export default connect(
    (state, ownProps) => ({
        counter: state.counter,
        path   : ownProps.path,
        label  : ownProps.label
    }),
    null
)(Content);
