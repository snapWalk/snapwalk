import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

class App extends React.Component {
  render () {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
