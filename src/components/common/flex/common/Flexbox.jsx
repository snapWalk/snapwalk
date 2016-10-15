import React from 'react';

export default function Flex ({
    style,
    className,
    column,
    vAlignCenter,
    hAlignCenter,
    width,
    height,
    color,
    backgroundColor,
    onMouseOver,
    children
}) {
    return (
        <div
            className={className}
            onMouseOver={onMouseOver}
            style={{
                ...style,
                ...{ display: 'flex', ...column ? { flexDirection: 'column'} : {} },
                ...vAlignCenter ? column ? { justifyContent: 'center' } : { alignItems: 'center' } : {},
                ...hAlignCenter ? column ? { alignItems: 'center' } : { justifyContent: 'center' } : {},
                ...{ color, backgroundColor, width, height },
            }}>
            { children }
        </div>
    )
}

Flex.propTypes = {
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    column: React.PropTypes.bool,
    vAlignCenter: React.PropTypes.bool,
    hAlignCenter: React.PropTypes.bool,
    width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    onMouseOver: React.PropTypes.func,
    children: React.PropTypes.node,
};