import React from 'react';
import CustomTheme from '../common/app-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/**      Author: Mike Chabot
 *  Description: Root component
 */
class Root extends React.Component {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(CustomTheme),
        };
    }
    render() {
        return (
            <div>
                <div>
                    <h3>react-redux-mui-boilerplate</h3>
                </div>
                <ul>
                    <li><Link to='/'>index route</Link></li>
                    <li><Link to='/foo'>/foo route</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Root.childContextTypes = {
    muiTheme: React.PropTypes.object
}

export default connect()(Root);
