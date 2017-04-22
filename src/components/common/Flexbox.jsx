import PropTypes from 'prop-types';
import React from 'react';

export default function Flex ({
    id,
    style,
    className,
    column,
    flex,
    vAlignCenter,
    hAlignCenter,
    width,
    margin,
    padding,
    height,
    color,
    backgroundColor,
    onMouseOver,
    onClick,
    children
}) {
    return (
        <div
            id={id}
            className={className}
            onMouseOver={onMouseOver}
            onClick={onClick}
            style={{
                ...{ display: 'flex', ...((column ? { flexDirection: 'column' } : {})) },
                ...((vAlignCenter ? column ? { justifyContent: 'center' } : { alignItems: 'center' } : {})),
                ...((hAlignCenter ? column ? { alignItems: 'center' } : { justifyContent: 'center' } : {})),
                ...{ color, backgroundColor, width, height, flex, margin, padding },
                ...style
            }}>
            { children }
        </div>
    );
}

Flex.propTypes = {
    id             : PropTypes.string,
    style          : PropTypes.object,
    className      : PropTypes.string,
    column         : PropTypes.bool,
    flex           : PropTypes.number,
    vAlignCenter   : PropTypes.bool,
    hAlignCenter   : PropTypes.bool,
    width          : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height         : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    margin         : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding        : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color          : PropTypes.string,
    backgroundColor: PropTypes.string,
    onMouseOver    : PropTypes.func,
    onClick        : PropTypes.func,
    children       : PropTypes.node
};
