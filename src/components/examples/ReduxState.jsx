import PropTypes from 'prop-types';
import React from 'react';
import _isObject from 'lodash/isObject';
import { connect } from 'react-redux';

class ReduxState extends React.Component {
    render () {
        return (
            <pre>
                {
                    _getContentAsString(this.props.state)
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
}

function _stringifyErrors (obj) {
    if (!obj) return;
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] && typeof obj[prop] === 'object') {
            if (obj[prop] instanceof Error) {
                obj[prop] = obj[prop].toString();
            } else {
                _stringifyErrors(obj[prop]);
            }
        }
    }
}

function _getContentAsString (content) {
    _stringifyErrors(content);
    return _isObject(content)
        ? JSON.stringify(content, null, 2)
        : content;
}

ReduxState.propTypes = {
    state: PropTypes.object.isRequired
};

export default connect(
    (state) => ({ state })
)(ReduxState);
