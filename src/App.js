import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Iniciogoogle from './components/Iniciogoogle';
import Loginsesion from './components/Loginsesion';
import Lecciones from './components/Lecciones';
import Nivel1 from './components/Nivel1';
import Ejercicios1 from './components/Ejercicios1';
import Uno from './components/1';
import Dos from './components/2';
import Tres from './components/3';
import Cuatro from './components/4';
import Cinco from './components/5';
import Seis from './components/6';
import Siete from './components/7';
import Ocho from './components/8';
import Nueve from './components/9';
import Diez from './components/10';
import Condicionales from './components/Condicionales';
import Enunciado3 from './components/enunciado3';
import Enunciado4 from './components/enunciado4';
import Enunciado5 from './components/enunciado5';
import Enunciado6 from './components/enunciado6';
import Enunciado7 from './components/enunciado7';
import Enunciado8 from './components/enunciado8';
import Enunciado9 from './components/enunciado9';
import Enunciado10 from './components/enunciado10';
import Enunciado11 from './components/enunciado11'; // Importa el nuevo componente
import './styles/App.css';

function App() {
  const [view, setView] = useState('login');

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      {view === 'login' && <Login toggleView={toggleView} />}
      {view === 'register' && <Register toggleView={toggleView} />}
      {view === 'iniciogoogle' && <Iniciogoogle toggleView={toggleView} />}
      {view === 'loginsesion' && <Loginsesion toggleView={toggleView} />}
      {view === 'dashboard' && <Dashboard toggleView={toggleView} />}
      {view === 'profile' && <Profile toggleView={toggleView} />}
      {view === 'lecciones' && <Lecciones toggleView={toggleView} />}
      {view === 'nivel1' && <Nivel1 toggleView={toggleView} />}
      {view === 'ejercicios1' && <Ejercicios1 toggleView={toggleView} />}
      {view === '1' && <Uno toggleView={toggleView} />}
      {view === '2' && <Dos toggleView={toggleView} />}
      {view === '3' && <Tres toggleView={toggleView} />}
      {view === '4' && <Cuatro toggleView={toggleView} />}
      {view === '5' && <Cinco toggleView={toggleView} />}
      {view === '6' && <Seis toggleView={toggleView} />}
      {view === '7' && <Siete toggleView={toggleView} />}
      {view === '8' && <Ocho toggleView={toggleView} />}
      {view === '9' && <Nueve toggleView={toggleView} />}
      {view === '10' && <Diez toggleView={toggleView} />}
      {view === 'condicionales' && <Condicionales toggleView={toggleView} />}
      {view === 'enunciado3' && <Enunciado3 toggleView={toggleView} />}
      {view === 'enunciado4' && <Enunciado4 toggleView={toggleView} />}
      {view === 'enunciado5' && <Enunciado5 toggleView={toggleView} />}
      {view === 'enunciado6' && <Enunciado6 toggleView={toggleView} />}
      {view === 'enunciado7' && <Enunciado7 toggleView={toggleView} />}
      {view === 'enunciado8' && <Enunciado8 toggleView={toggleView} />}
      {view === 'enunciado9' && <Enunciado9 toggleView={toggleView} />}
      {view === 'enunciado10' && <Enunciado10 toggleView={toggleView} />}
      {view === 'enunciado11' && <Enunciado11 toggleView={toggleView} />}
    </div>
  );
}

export default App;
