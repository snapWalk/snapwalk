import React from 'react';
import CustomTheme from '../common/app-theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import { connect } from 'react-redux';

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
            <div>Hello, World!</div>
        );
    }
}

Root.childContextTypes = {
    muiTheme: React.PropTypes.object
}

export default connect()(Root);
