import React from 'react';

export default function Panel ({
    faIcon,
    title,
    style,
    children
}) {
    return (
        <section style={{...styles.container, ...style}}>
            <h5 style={styles.heading}>
                <i className={`fa fa-${faIcon}`} aria-hidden="true"></i>
                <span style={{marginLeft: 5}}>{ title }</span>
            </h5>
            <section style={styles.content}>
                { children }
            </section>
        </section>
    )
}

const styles = {
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
    },
    content: {
        padding: 5
    }
};