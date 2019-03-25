import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="LA REUNION"
          country="FRANCE"
          distance="3200 miles"
          photo="https://milesandlove.com/system/attachments/7436/xxlarge/quand-la-nature-envahit-tout-la-reunion.jpg?1532459166"
        />
        <Travel
          destination="AUSTURLAND"
          country="ISLAND"
          distance="1500 miles"
          photo="https://milesandlove.com/system/attachments/6942/xxlarge/austurland-islande.jpg?1495789181"
        />
      </div>
    );
  }
}

export default App;
