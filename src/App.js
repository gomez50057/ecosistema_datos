// src/App.js
import React from 'react';
import './styles.css';
import Home from './Home';
import CountersSection from './CountersSection';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <Home />
      <CountersSection />
      <Cards />
    </div>
  );
}

export default App;
