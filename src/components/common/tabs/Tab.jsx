import React from 'react';
import { browserHistory } from 'react-router';

export default function Tab ({
    label,
    path,
    active
}) {
    return (
        <li onClick={() => browserHistory.push(path)}
            style={{
            ...{
                margin: 0,
                marginRight: 10,
                padding: '4px 10px',
                fontSize: 20,
                fontWeight: 300,
                cursor: 'pointer',
                color: '#212121',
                backgroundColor: '#9CCC65',
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                border: '1px solid #8BC34A'
            },
            ...active ? {
                color: '#FFFFFF',
                backgroundColor: '#689F38',
                border: '1px solid #558B2F'
            } : {} }}>
            { label }
        </li>
    )
}
