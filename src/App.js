import React, { Component } from 'react';
import background from './background.jpg';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    let style={backgroundImage:'url('+background+')',backgroundSize :'cover'}; 
    return (
      <div className="App" style={style}>
        <Header />
      </div>
    );
  }
}

export default App;
