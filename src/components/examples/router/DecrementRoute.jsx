import PropTypes from 'prop-types';
import React from 'react';
import RouteContent from './common/RouteContent';
import { decrement } from '../../../redux/actions/action-creators';
import { connect } from 'react-redux';

function DecrementRoute ({
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

DecrementRoute.propTypes = {
    decrement: PropTypes.func.isRequired
};

export default connect(
    null,
    { decrement }
)(DecrementRoute);
