import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Iniciogoogle from './components/Iniciogoogle';
import Loginsesion from './components/Loginsesion';
import './styles/App.css';

function App() {
  const [view, setView] = useState('login'); // 'login', 'register', 'dashboard', 'profile'

  const toggleView = (newView) => {
    setView(newView);
  }; 

  return (
    <div className="App">
      {view === 'login' && <Login toggleView={toggleView} />}
      {view === 'register' && <Register toggleView={toggleView} />}
      {view === 'iniciogoogle' && <Iniciogoogle toggleView={toggleView} />}
      {view === 'loginsesion' && <Loginsesion toggleView={toggleView} />}
      {view === 'dashboard' && <Dashboard toggleView={toggleView}/>}
      {view === 'profile' && <Profile toggleView={toggleView} />}

    </div>
  );
} 

export default App;
