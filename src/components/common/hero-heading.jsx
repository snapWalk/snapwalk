import React from 'react';

export default function HeroHeading ({
    title,
    subtitle
}) {
    return (
        <div style={style.header}>
            <h1 style={style.h1}>{title}&nbsp;</h1>
            <small style={style.small}>{subtitle}</small>
        </div>
    );
}

const style = {
    header: {
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline'
    },
    h1: {
        margin: 0,
        fontSize: '4.5rem'
    },
    small: {
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: '20px',
        opacity: .7
    }
};