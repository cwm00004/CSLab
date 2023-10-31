// App.js

import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 03</h2>
      <p>WVU ID: 800333892</p>
      <p>Hi, I am Corbin</p>
      <div className="card-container">
        <Card /> 
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
