import React from "react";
import CreateView from "./createView";
import SearchView from "./searchView";
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
      return <SearchView/>;
    }
    if (this.state.createView) {
      return <CreateView userID={this.props.userID} />;
    }
    if (!this.state.createView && !this.state.searchView) {
      home = <div className="home">
        <h1 className="snapwalk">SnapWalk</h1>
        <div className="homeBtns">
          <div>
            <button className="custom-btn" onClick={() => this.goCreate()}>create</button>
          </div>
          <div>
            <button className="custom-btn" onClick={() => this.goSearch()}>explore</button>
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
