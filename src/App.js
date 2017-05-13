/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Trello Clone</h2>
        </div>

      </div>
    );
  }
}

export default connect( state => state, {})(App);