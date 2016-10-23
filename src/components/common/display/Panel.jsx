import React from 'react';
import { Row, Column } from '../';


export default function Panel ({
    faIcon,
    title,
    children
}) {
    return (
        <Column
            backgroundColor="#ECEFF1"
            width={450}
            style={{
            ...{
                margin: 5,
                padding: 5,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                border: '1px solid #90A4AE'
            }
        }}>
            { _renderHeading(title, faIcon) }
            <section style={{padding: 5}}>
                { children }
            </section>
        </Column>
    )
}

function _renderHeading(title, icon, style) {
    if (title) {
        return (
            <Row
                vAlignCenter={true}
                color="#455A64"
                style={{
                    ...{
                        padding: 2,
                        fontSize: '1.5em'
                    },
                    ...style}}>
                { _renderIcon(icon) }
                <span style={icon ? {marginLeft: 8} : {}}>{ title }</span>
            </Row>
        )
    }
}

function _renderIcon(icon) {
    if (icon) {
        return (
            <i className={`fa fa-${icon}`} />
        )
    }
}