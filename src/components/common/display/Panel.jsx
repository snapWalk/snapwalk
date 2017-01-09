import React from 'react';
import { Flexbox } from '../';

export default function Panel ({
    faIcon,
    title,
    children
}) {
    return (
        <Flexbox
            column={true}
            backgroundColor="#ECEFF1"
            width={450}
            style={{
                ...{
                    margin                : 5,
                    padding               : 5,
                    borderTopRightRadius  : 5,
                    borderBottomLeftRadius: 5,
                    border                : '1px solid #90A4AE'
                }
            }}>
            { _renderHeading(title, faIcon) }
            <section style={{padding: 5}}>
                { children }
            </section>
        </Flexbox>
    );
}

function _renderHeading (title, icon, style) {
    if (title) {
        return (
            <Flexbox
                vAlignCenter={true}
                color="#455A64"
                style={{
                    ...{
                        padding : 2,
                        fontSize: '1.5em'
                    },
                    ...style}}>
                { _renderIcon(icon) }
                <span style={icon ? {marginLeft: 8} : {}}>{ title }</span>
            </Flexbox>
        );
    }
}

function _renderIcon (icon) {
    if (icon) {
        return (
            <i className={`fa fa-${icon}`} />
        );
    }
}

Panel.propTypes = {
    faIcon  : React.PropTypes.string,
    title   : React.PropTypes.string,
    children: React.PropTypes.node
};
