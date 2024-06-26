import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [view, setView] = useState('login'); // 'login', 'register', 'dashboard'

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      {view === 'login' && <Login toggleView={toggleView} />}
      {view === 'register' && <Register toggleView={toggleView} />}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
