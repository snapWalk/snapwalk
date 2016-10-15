import React from 'react';
import { Bullet } from './common';

const properties = [
    { name: 'data',         desc: 'The result of the promise, if successful.'},
    { name: 'error',        desc: 'The result of the promise, if rejected'},
    { name: 'lastUpdated',  desc: 'The date/time that the entity was last modified' },
    { name: 'isFetching',   desc: 'Whether or not the data promise is pending.'},
];

export default function Description () {
    return (
        <div>
            <div>
                <Bullet />
                Store data on <code>state.model</code>associated to a key of your choice!
            </div>
            <div>
                <Bullet />
                Each entity is automatically wrapped with the properties below:
                <ol style={style.ol}>
                    {
                        properties.map((property, index) => (
                            <li key={index} style={style.olLi}>
                                <code>{property.name}</code>:&nbsp;
                                <span>{property.desc}</span>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

const style = {
    ol: {
        margin: 0,
        marginLeft: 10
    },
    olLi: {
        margin: 5
    }
};