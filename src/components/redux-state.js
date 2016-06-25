import React from 'react';
import { connect } from 'react-redux';

function ReduxState({
    state
}) {
    return (
        <section style={style.container}>
            <h5 style={style.heading}>
                Redux State
            </h5>
            <code>
                { JSON.stringify(state, null, 2) }
            </code>
        </section>
    );
}

const style = {
    container: {
        margin: 5,
        padding: 5,
        backgroundColor: '#C5E1A5'
    },
    heading: {
        margin: '5px 0'
    },
    code: {
        fontSize: '120%',
        display: 'block',
        margin: '10px 0'
    }
};

export default connect(
    (state) => ({state})
)(ReduxState);