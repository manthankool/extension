/* global chrome */

import React from "react";
import HomePage from "./HomePage";
import "./App.css";
import { KeywordStore } from "./store";
import Navbar from "react-bootstrap/Navbar";
import logo from './scraperly.png';

function App() {
  return (
    <div style={{textAlign:'center'}} className="App">
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="https://www.scraperly.io/"><img src={logo} style={{width:'6%',position:'fixed'}} /></Navbar.Brand>
      </Navbar>
      <HomePage   />
    </div>
  );
}
export default App;
