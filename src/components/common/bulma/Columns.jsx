import React from 'react';
import PropTypes from 'prop-types';

function Columns ({
    columns
}) {
    return (
        <div className="columns">
            { columns.map(_renderColumn)}
        </div>
    );
}

function _renderColumn (column, index) {
    return (
        <div key={index} className="column">
            { column }
        </div>
    );
}

Columns.propTypes = {
    columns: PropTypes.array.isRequired
};

export default Columns;
