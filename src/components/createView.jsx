import React from 'react';

class CreateView extends React.Component {
  constructor (props) {
    super(props);
    this.state = { test: false };
  }

  render () {
    return (
      <div>
        <h2>Create your own route</h2>
      </div>
    );
  }
}

export default CreateView;
