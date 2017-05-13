/* eslint-disable */
import React, { Component } from 'react';
import ListarListas from './components/ListarListas';
import { connect } from 'react-redux';
import './site.css';


class App extends Component {
  render() {
    return (
      <ListarListas/>
    );
  }
}

export default connect( state => state, {})(App);
