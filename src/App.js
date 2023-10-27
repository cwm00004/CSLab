// App.js

import React from 'react';
import './App.css';
import Navbar from './Navbar'; // Import the Navbar component
import Card from './card'; // Import the Card component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use the Navbar component */}
      <h1>CS 230L</h1>
      <h2>Section - 03</h2>
      <p>WVU ID: 800333892</p>
      <p>Hi, I am Corbin</p>
      <div className="card-container">
        <Card /> {/* Use the Card component multiple times for each card */}
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
