import React from 'react';
import { browserHistory } from 'react-router';

export default function Tab ({
    label,
    path,
    active
}) {
    return (
        <li style={{...style.tab, ...active ? style.active : '' }}
            onClick={link(path)} >
            { label }
        </li>
    )
}

function link (path) {
    return function () {
        browserHistory.push(path);
    }
}

const style = {
    tab: {
        float: 'left',
        margin: '0 5px',
        padding: '.25em',
        fontSize: '1.2em',
        fontWeight: 300,
        cursor: 'pointer',
        color: '#212121',
        backgroundColor: '#9CCC65',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        border: '1px solid #8BC34A'
    },
    active: {
        color: '#FFFFFF',
        backgroundColor: '#689F38',
        border: '1px solid #558B2F'
    }
};

