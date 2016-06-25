import React from 'react';
import Tab from './tab';
import map from 'lodash/map';

export default function TabMenu({
    items,
    activePath
}) {
    return (
        <ul style={style.tabs}>
            { map(items, _renderTab(activePath)) }
        </ul>
    );
}

function _renderTab (activePath) {
    return function (itemPath, label) {
        return (
            <Tab
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