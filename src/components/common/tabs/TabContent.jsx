import PropTypes from 'prop-types';
import React from 'react';

export default function TabContent ({
    children
}) {
    return (
        <div style={{
            border                : '1px solid #B0BEC5',
            padding               : 5,
            borderTopRightRadius  : 10,
            borderBottomLeftRadius: 10,
            height                : '100%'}}>
            { children }
        </div>
    );
}

TabContent.propTypes = {
    children: PropTypes.node
};
