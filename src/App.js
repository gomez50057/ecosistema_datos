// src/App.js
import React, { useState } from 'react';
import './styles.css';
import Home from './Home';
import CountersSection from './CountersSection';
import Cards from './Cards';
import Login from './Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Home />
      <CountersSection />
      <Cards />
    </div>
  );
}

export default App;
