import React from 'react';
import { Row, Column, Bullet } from '../../../common';
import { connect } from 'react-redux';

function Content ({
    label,
    path,
    action,
    counter
}) {
    return (
        <Column style={{padding: '0 5px'}}>
            <Row vAlignCenter={true}>
                <Bullet/>
                <code>counter</code>: <code>{ counter }</code>
            </Row>
            <Row vAlignCenter={true}>
                <Bullet/>
                You are at the <code>('{path}')</code> route
            </Row>
            <button
                className='button-primary'
                onClick={action}>
                {label}
            </button>
        </Column>
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
