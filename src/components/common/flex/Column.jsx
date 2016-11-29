import React from 'react';
import { Flexbox } from './common';

export default function Column ({
    style,
    className,
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
        <Flexbox
            column={true}
            style={style}
            className={className}
            vAlignCenter={vAlignCenter}
            hAlignCenter={hAlignCenter}
            width={width}
            height={height}
            color={color}
            backgroundColor={backgroundColor}
            onMouseOver={onMouseOver}>
            { children }
        </Flexbox>
    );
}

Column.propTypes = {
    style          : React.PropTypes.object,
    className      : React.PropTypes.string,
    vAlignCenter   : React.PropTypes.bool,
    hAlignCenter   : React.PropTypes.bool,
    width          : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    height         : React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    color          : React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    onMouseOver    : React.PropTypes.func,
    children       : React.PropTypes.node
};
