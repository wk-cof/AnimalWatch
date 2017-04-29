import React, { Component } from 'react';
import logo from './images/animalWatchLogo.jpeg';
import './App.css';
import Map from './Map.js';
import {
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-header-text">Animal Watch</h2>
            <Link to={`/new-sighting`} className="App-new-sighting-link">
              New Sighting
            </Link>
        </div>
        <Map />
      </div>
    );
  }
}

export default App;
