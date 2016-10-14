import React from 'react';

export Column from './Column';
export Row from './Row';

/**
 * A simple <div> that accepts children, and styles the height and width to 100%
 * @param children
 * @constructor
 */
export function Container ({
    children
}) {
    return (
        <div style={{
            width: '100%',
            height: '100%' }}>
            { children }
        </div>
    )
}