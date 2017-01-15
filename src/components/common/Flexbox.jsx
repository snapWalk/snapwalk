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
                ...{ display: 'flex', ...column ? { flexDirection: 'column' } : {} },
                ...vAlignCenter ? column ? { justifyContent: 'center' } : { alignItems: 'center' } : {},
                ...hAlignCenter ? column ? { alignItems: 'center' } : { justifyContent: 'center' } : {},
                ...{ color, backgroundColor, width, height, flex, margin, padding },
                ...style
            }}>
            { children }
        </div>
    );
}

Flex.propTypes = {
    id             : React.PropTypes.string,
    style          : React.PropTypes.object,
    className      : React.PropTypes.string,
    column         : React.PropTypes.bool,
    flex           : React.PropTypes.number,
    vAlignCenter   : React.PropTypes.bool,
    hAlignCenter   : React.PropTypes.bool,
    width          : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    height         : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    margin         : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    padding        : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    color          : React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    onMouseOver    : React.PropTypes.func,
    onClick        : React.PropTypes.func,
    children       : React.PropTypes.node
};
