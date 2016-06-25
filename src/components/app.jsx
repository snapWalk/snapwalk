import React from 'react';
import { Link } from 'react-router';

class Root extends React.Component {
    render() {
        return (
            <div>
                <h3>react-boilerplate</h3>
                <ul>
                    <li><Link to='/'>Index route: <code>'/'</code></Link></li>
                    <li><Link to='/foo'>Foo route: <code>'/foo'</code></Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Root;
