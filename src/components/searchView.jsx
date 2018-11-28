import React from 'react';

class SearchView extends React.Component {
  constructor (props) {
    super(props);
    this.state = { test: false };
  }

  render () {
    return (
      <div>
        <h2>Search for a route</h2>
      </div>
    );
  }
}

export default SearchView;
