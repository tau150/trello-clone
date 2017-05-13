/* eslint-disable */
import React, { Component } from 'react';
import ListarListas from './components/ListarListas';
import { connect } from 'react-redux';
import { obtenerDatos, guardarDatos } from './actions/index';
import './site.css';


class App extends Component {

  componentDidMount(){
  	this.props.obtenerDatos((respose) => {
    	this.props.guardarDatos(respose);
  	})

  }

  render() {
  	
    return (
      <ListarListas/>
    );
  }
}

export default connect( state => state, {obtenerDatos, guardarDatos})(App);
