import React from 'react';
import CreateView from './createView';

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
      home = <div><button onClick={() => this.goCreate()}>Create a new route</button><button>Search for a route</button></div>;
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
