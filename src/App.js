import React, { Component } from 'react';
import logo from './animalWatchLogo.jpeg';
import './App.css';
import Map from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-header-text">Animal Watch</h2>
        </div>
        <Map />
      </div>
    );
  }
}

export default App;
