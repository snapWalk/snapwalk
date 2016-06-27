import React from 'react';
import { connect } from 'react-redux';
import { fetchFoo, fetchBar } from '../../redux/actions/thunk-action-creators';
import Entity from './entity';
import CodeBlock from '../common/code-block';

const properties = [
    { name: 'isFetching',   desc: 'Whether the data promise is pending'},
    { name: 'lastUpdated',  desc: <span>Auto-updated when <code>data</code> is modified</span>},
    { name: 'data',         desc: 'Result of the data promise'}
];

const code = (
`function fetchFoo() {
    return loadEntity(
        'fooEntity',
        new Promise(resolve => {
            const delay = _getShortDelay();
            setTimeout(() => {
                resolve({delay})
            }, delay * 1000)
        })
    );
}`);


function AjaxExample({
    fooEntity,
    barEntity,
    fetchBar,
    fetchFoo,
}) {
    return (
        <section>

            <ul style={style.ul}>
                <li style={style.ulLi}>Load arbitrary data and store it on <code>model</code></li>
                <li style={style.ulLi}>Every entity is automatically associated with three properties:
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
                </li>
                <li style={style.ulLi}>If the promise rejects, results are stored on <code>error</code></li>
            </ul>

            <hr />
            <Entity
                name="fooEntity"
                init={true}
                entity={fooEntity}
                update={fetchFoo} />
            <Entity
                name="barEntity"
                entity={barEntity}
                update={fetchBar}/>

            <hr />

            <ul style={style.ul}>
                <li style={style.ulLi}>Use <code>&nbsp;
                    <a href="https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunk-action-creators.js#L21">
                        loadEntity
                    </a>&nbsp;
                </code> to fetch data with ease:</li>
            </ul>

            <CodeBlock code={code} isString={true}/>

        </section>
    )
}

const style = {
    ul: {
        marginBottom: 5
    },
    ulLi: {
        margin: 0
    },
    ol: {
        margin: 0,
        marginLeft: 10
    },
    olLi: {
        margin: 5
    }
};

export default connect(
    (state) => ({
        fooEntity : state.model.fooEntity,
        barEntity : state.model.barEntity
    }),
    { fetchFoo, fetchBar }

)(AjaxExample);