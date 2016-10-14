import React from 'react';
import Tab from './Tab';
import map from 'lodash/map';

export default function TabMenu({
    items,
    activePath
}) {
    return (
        <ul style={{
            display: 'flex',
            backgroundColor: '#DCEDC8',
            listStyleType: 'none',
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            margin: 0,
            padding: 0 }}>
            { map(items, _renderTab(activePath)) }
        </ul>
    );
}

function _renderTab (activePath) {
    return function (item, index) {
        return (
            <Tab
                active={activePath === item.path}
                key={index}
                path={item.path}
                label={item.label}
            />
        );
    }
}