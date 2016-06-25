import React from 'react';

export default function Panel({
    title,
    children
}) {
    return (
        <section style={style.container}>
            <h5 style={style.heading}>{ title }</h5>
            <section style={style.content}>
                { children }
            </section>
        </section>
    )
}

const style = {
    container: {
        margin: 5,
        padding: 5,
        backgroundColor: '#F1F8E9',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        border: '1px solid #558B2F'
    },
    heading: {
        color: '#558B2F',
        margin: 0,
        marginBottom: 5
    }
};