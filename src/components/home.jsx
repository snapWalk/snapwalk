import React from "react";
import CreateView from "./createView";
import Search from "./search";
require("../scss/style.scss");

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
      return <Search/>;
    }
    if (this.state.createView) {
      return <CreateView userID={this.props.userID} />;
    }
    if (!this.state.createView && !this.state.searchView) {
      home = <div className="home">
        <h1>SnapWalk</h1>
        <div classID="homeBtns">
          <div>
            <button className="custom-btn" onClick={() => this.goCreate()}>Create a new route</button>
          </div>
          <div>
            <button className="custom-btn" onClick={() => this.goSearch()}>Search for a route</button>
          </div>
        </div>
      </div>;
    }
    return (
      <div>
        {home}
      </div>
    );
  }
}

export default Home;
