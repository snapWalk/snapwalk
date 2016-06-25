import React from 'react';
import MenuItem from './menu-item';
import map from 'lodash/map';

export default function Menu({
    items,
    activePath
}) {
    return (
        <ul style={style.tabs}>
            { map(items, _renderMenuItem(activePath)) }
        </ul>
    );
}

function _renderMenuItem (activePath) {
    return function (itemPath, label) {
        return (
            <MenuItem
                active={activePath === itemPath}
                key={label}
                path={itemPath}
                label={label}
            />
        );
    }
}

const style = {
    tabs: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0
    }
};