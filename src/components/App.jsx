import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      error: false
    };
  }

  render () {
    return (
      <div>Hello Almudena!</div>
    );
  }
}

export default App;
