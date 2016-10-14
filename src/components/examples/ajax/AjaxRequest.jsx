import React from 'react';
import Entity from './Entity';
import { CodeBlock, Panel } from '../../common';
import { fetchFoo, fetchBar, fetchFail } from '../../../redux/actions/thunk-action-creators';
import { connect } from 'react-redux';

function AjaxExample({
    fooEntity,
    barEntity,
    failEntity,
    fetchBar,
    fetchFoo,
    fetchFail
}) {
    return (
        <section>

            <div>
                <Bullet />
                Store data on <code>model</code> (in Redux) associated to a key of your choice!
            </div>

            <div>
                <Bullet />
                Each entity you load is associated with at least three properties:
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

            <div>
                <Bullet />
                The 4th property is <code>error</code>, and stores the results of the rejected promise:
                <ol style={style.ol}>
                    <li style={style.olLi}>
                        <code>error</code> is deleted from the <code>entity</code> on fetch requests and successes.
                    </li>
                </ol>
            </div>

            <hr />

            <Panel subtitle="Click buttons and check out the Redux State!">
                <Entity
                    name="fooEntity"
                    runFetchEntityOnMount={true}
                    entity={fooEntity}
                    fetchEntity={fetchFoo} />
                <Entity
                    name="barEntity"
                    entity={barEntity}
                    fetchEntity={fetchBar}/>
                <Entity
                    name="failEntity"
                    entity={failEntity}
                    fetchEntity={fetchFail}/>
            </Panel>

            <hr />

            <div>
                <Bullet />
                Use <code>&nbsp;
                <a href="https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunk-action-creators.js#L21">
                    loadEntity
                </a></code> to fetch data like the examples above!
            </div>

            <div>
                <Bullet />
                At minimum, it accepts a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>&nbsp;
                and a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> as arguments.
            </div>

            <div>
                <Bullet />
                The result of the promise is stored on <code>model</code> using the String you provided as the key.
            </div>

            <div>
                <Bullet />
                Below is the code that executes when we press the FETCH button above for our fake <code>fooEntity</code>:
            </div>

            <div style={{marginTop: 10}}>
                <CodeBlock code={code} isString={true}/>
            </div>

        </section>
    )
}

function Bullet() {
    return (
        <i
            className='fa fa-angle-right'
            style={{
                fontWeight: 700,
                marginRight: 6
            }}
        />
    )
}

const properties = [
    { name: 'data',         desc: 'The result of the promise, if successful.'},
    { name: 'lastUpdated',  desc: 'The date/time the entity was last updated.' },
    { name: 'isFetching',   desc: 'Whether the data promise is pending.'},
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

const style = {
    ol: {
        margin: 0,
        marginLeft: 10
    },
    olLi: {
        margin: 5
    }
};

export default connect(
    ({ model }) => ({
        fooEntity: model.fooEntity,
        barEntity:  model.barEntity,
        failEntity: model.failEntity,
    }),
    { fetchFoo, fetchBar, fetchFail }
)(AjaxExample);