import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlannerTask from './planner/PlannerTask.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <PlannerTask title="This is a test planner task." progress="COMPLETED" />
          <PlannerTask title="This is a test in-progress task." progress="PROGRESS" />
        </p>
      </div>
    );
  }
}

export default App;
