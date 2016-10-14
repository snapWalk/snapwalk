import React from 'react';
import RouteContent from './RouteContent';
import { decrement } from '../../../redux/actions/action-creators';
import { connect } from 'react-redux';

function Decrement ({
    decrement
}) {
    return (
        <RouteContent
            label="Decrement"
            path="/decrement"
            action={decrement}
        />
    );
}

export default connect(
    null,
    { decrement }
)(Decrement);