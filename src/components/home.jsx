import React from "react";
import CreateView from "./createView";
import SearchView from "./searchView";
import Login from "./login";
import { Button } from "react-bootstrap";

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      createView: false,
      searchView: false
    };
  }

  goCreate () {
    this.setState({ createView: true });
  }

  goSearch () {
    this.setState({ searchView: true });
  }

  render () {
    let home;
    if (this.state.searchView) {
      return <SearchView/>;
    }
    if (this.state.createView) {
      return <CreateView/>;
    }
    if (!this.state.createView && !this.state.searchView) {
      home = <div><Button bsStyle="primary" onClick={() => this.goCreate()}>Create a new route</Button><Button bsStyle="primary" onClick={() => this.goSearch()}>Search for a route</Button>
        <Login/>
      </div>;
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
