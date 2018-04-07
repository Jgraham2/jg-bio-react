import React, { Component } from 'react';
import logo from '../assets/brackets.png';
import '../styles/App.css';
import {Button, Navbar, NavItem, p, h1, h2, h3, h4, h5, a} from 'react-materialize'

class Navigation extends App.Component {
  render() {
    return (
    <div>
   <header>
   <Navbar className="App-nav" right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
   </Navbar>
   </header>
      </div>
    );
  }
}

export default App;
