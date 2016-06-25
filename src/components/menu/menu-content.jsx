import React from 'react';

export default function MenuContent({
    children
}) {
    return (
        <div style={style}>
            { children }
        </div>
    );
}

const style = {
    marginTop: 5,
    padding: 5,
    backgroundColor: '#E8F5E9',
    paddingTop: 10,
    height: '100%'
};