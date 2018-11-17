import React from 'react';
import PropTypes from 'prop-types';

const Columns = ({
  columns
}) => {
  return (
    <div className="columns">
      {columns.map(_renderColumn)}
    </div>
  );
};

const _renderColumn = (column, index) => {
  return (
    <div key={index} className="column">
      {column}
    </div>
  );
};

Columns.propTypes = {
  columns: PropTypes.array.isRequired
};

export default Columns;
