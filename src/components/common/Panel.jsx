import React from 'react';

export default function Panel ({
    faIcon,
    title,
    subtitle,
    style,
    children
}) {
    return (
        <section style={{
            ...styles.container,
            ...style
        }}>
            {
                title
                    ? (
                        <h5 style={styles.heading}>
                            <i className={`fa fa-${faIcon}`} aria-hidden="true"></i>
                            <span style={styles.title}>{ title }</span>
                        </h5>
                      )
                    : <span />
            }
            {
                subtitle
                    ? <div style={styles.subtitle}><em>{ subtitle }</em></div>
                    : <span />
            }
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
    title: {
        marginLeft: 8
    },
    subtitle: {
        color: '#558B2F',
        fontSize: 16,
        marginBottom: 5
    },
    content: {
        padding: 5
    }
};