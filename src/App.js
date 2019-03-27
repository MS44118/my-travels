//src/App.js
import React, { Component } from 'react';
import './App.css';

//import Travels.js
import Travel from "./Travel";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel />
      </div>
    );
  }
}

export default App;
