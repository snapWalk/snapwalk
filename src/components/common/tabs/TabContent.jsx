import React from 'react';

export default function TabContent({
    children
}) {
    return (
        <div style={{
            margin: 5,
            padding: 5,
            height: '100%',
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10 }}>
            { children }
        </div>
    );
}
