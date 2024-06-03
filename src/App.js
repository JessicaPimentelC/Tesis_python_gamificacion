import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Perfil from './Perfil'; // Importa el componente Perfil
import './App.css';

function App() {
  const [view, setView] = useState('login'); // 'login', 'register', 'dashboard', 'perfil'

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      {view === 'login' && <Login toggleView={toggleView} />}
      {view === 'register' && <Register toggleView={toggleView} />}
      {view === 'dashboard' && <Dashboard />}
      {view === 'perfil' && <Perfil />} {/* Agrega el renderizado del Perfil */}
    </div>
  );
}

export default App;
