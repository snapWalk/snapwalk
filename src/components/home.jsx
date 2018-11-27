import React from 'react';
import CreateView from './createView';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      createView: false
    };
  }

  goCreate () {
    this.setState({ createView: true });
  }

  render () {
    let home;

    if (!this.state.createView) {
      home = <div><Button bsStyle="primary" onClick={() => this.goCreate()}>Create a new route</Button><Button bsStyle="primary">Search for a route</Button>
      </div>;
    } else {
      home = <CreateView/>;
    }

    return (
      <div>
        <h1>SnapWalk</h1>
        {home}
      </div>
    );
  }
}

export default Home;
