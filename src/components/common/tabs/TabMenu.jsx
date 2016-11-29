import React from 'react';
import Tab from './Tab';
import map from 'lodash/map';

export default function TabMenu ({
    items,
    activePath
}) {
    return (
        <ul style={{
            display      : 'flex',
            listStyleType: 'none',
            margin       : 0,
            padding      : 0 }}>
            { map(items, _renderTab(activePath)) }
        </ul>
    );
}

function _renderTab (activePath) {
    return function TabItem (item, index) {
        return (
            <Tab
                active={activePath === item.path}
                key={index}
                path={item.path}
                label={item.label}
            />
        );
    };
}

TabMenu.propTypes = {
    items     : React.PropTypes.array,
    activePath: React.PropTypes.string
};
