import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './components/Alert'

class App extends Component {
  render() {
    return (
      <div>
        <Alert />
        <Alert alertType="danger"/>
      </div>
    );
  }
}

export default App;
