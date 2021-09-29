import React, { Component } from 'react';
import logo from './logo.svg';
import Slide_home from '../src/assets/img/Slide_home.png'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="row">
        <div className="Slide">
          <img src={Slide_home} width="100" height="50" alt="Slide" />
        </div>
      </div>

      </header>
    </div>
  );
}

 
export default App;