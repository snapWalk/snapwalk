import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';

class App extends React.Component {
  render () {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
