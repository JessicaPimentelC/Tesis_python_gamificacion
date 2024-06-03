import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Profile from './Profile'; // Importa el componente Profile
import './App.css';

function App() {
  const [view, setView] = useState('login'); // 'login', 'register', 'dashboard', 'profile'

  const toggleView = (newView) => {
    setView(newView);
  }; 

  return (
    <div className="App">
      {view === 'login' && <Login toggleView={toggleView} />}
      {view === 'register' && <Register toggleView={toggleView} />}
      {view === 'dashboard' && <Dashboard toggleView={toggleView} />}
      {view === 'profile' && <Profile />}
    </div>
  );
}

export default App;
