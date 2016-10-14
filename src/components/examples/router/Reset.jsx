import React from 'react';
import RouteContent from './RouteContent';
import { reset } from '../../../redux/actions/action-creators';
import { connect } from 'react-redux';


function Reset ({
    reset
}) {
    return (
        <RouteContent
            label="Reset"
            path="/reset"
            action={reset}
        />
    );
}

export default connect(
    null,
    { reset }
)(Reset);