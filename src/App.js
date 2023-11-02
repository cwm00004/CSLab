// App.js

import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Card from './card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 03</h2>
      <p>WVU ID: 800333892</p>
      <p>Hi, I am Corbin</p>
      <div className="card-container">
        <Card backgroundColor="bg-success" /> 
        <Card backgroundColor="bg-primary" />
        <Card backgroundColor="bg-secondary" />
      </div>
    </div>
  );
}

export default App;
