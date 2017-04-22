import PropTypes from 'prop-types';
import React from 'react';

export default function JsonBlock ({
    content
}) {
    if (!_.isString(content) && !_.isObject(content)) {
        return <p className="text-danger">JsonBlock: content prop must be a string or object</p>;
    }
    return _renderContent(content);
}

function _renderContent (content) {
    return (
        <pre>
            {
                _getContentAsString(content)
                    .split('\n')
                    .map((line, index) => (
                        <div key={index} className="line">
                            { line }
                        </div>
                    ))
            }
        </pre>
    );
}

function _getContentAsString (content) {
    return _.isObject(content)
        ? JSON.stringify(content, null, 2)
        : content;
}

JsonBlock.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};
