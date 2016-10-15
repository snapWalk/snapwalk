import React from 'react';
import { Bullet } from './common';
import { JsonBlock, Panel } from '../../common';

export default function LoadEntity() {
    return (
        <Panel title="loadEntity(name, promise, silent)" faIcon="code">
            {
                bullets.map((bullet, index) => (
                    <div key={index}>
                        <Bullet />
                        { bullet }
                    </div>
                ))
            }
            <div style={{marginTop: 10}}>
                <JsonBlock content={code}/>
            </div>
        </Panel>
    )
}

const links = [
    'https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunk-action-creators.js#L21',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'
];


const bullets = [
    <span>Use <code><a href={links[0]}>loadEntity</a></code> to fetch data with ease like the examples above!</span>,
    <span>At minimum, it accepts a <a href={links[1]}>String</a> and a <a href={links[2]}>Promise</a> as arguments.</span>,
    <span>The result of the promise is stored on <code>state.model</code> using the <code>name</code> you provided as the key.</span>,
    <span>Below is the code that executes when we press the FETCH button above for our fake <code>fooEntity</code>:</span>
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

