import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Once from './components/11';
import Examen from './components/Examen';
import Condicionales from './components/Condicionales';
import Enunciado3 from './components/enunciado3';
import Enunciado4 from './components/enunciado4';
import Enunciado5 from './components/enunciado5';
import Enunciado6 from './components/enunciado6';
import Enunciado7 from './components/enunciado7';
import Enunciado8 from './components/enunciado8';
import Enunciado9 from './components/enunciado9';
import Enunciado10 from './components/enunciado10';
import Enunciado11 from './components/enunciado11';
import Foro from './components/foro';
import Positions from './components/Positions';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/iniciogoogle" element={<Iniciogoogle/>} />
          <Route path="/loginsesion" element={<Loginsesion/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/lecciones" element={<Lecciones/>} />
          <Route path="/nivel1" element={<Nivel1/>} />
          <Route path="/ejercicios1" element={<Ejercicios1/>} />
          <Route path="/1" element={<Uno/>} />
          <Route path="/2" element={<Dos/>} />
          <Route path="/3" element={<Tres/>} />
          <Route path="/4" element={<Cuatro/>} />
          <Route path="/5" element={<Cinco/>} />
          <Route path="/6" element={<Seis/>} />
          <Route path="/7" element={<Siete/>} />
          <Route path="/8" element={<Ocho/>} />
          <Route path="/9" element={<Nueve/>} />
          <Route path="/10" element={<Diez/>} />
          <Route path="/11" element={<Once/>} />
          <Route path="/examen" element={<Examen/>} />
          <Route path="/condicionales" element={<Condicionales/>} />
          <Route path="/enunciado3" element={<Enunciado3/>} />
          <Route path="/enunciado4" element={<Enunciado4/>} />
          <Route path="/enunciado5" element={<Enunciado5/>} />
          <Route path="/enunciado6" element={<Enunciado6/>} />
          <Route path="/enunciado7" element={<Enunciado7/>} />
          <Route path="/enunciado8" element={<Enunciado8/>} />
          <Route path="/enunciado9" element={<Enunciado9/>} />
          <Route path="/enunciado10" element={<Enunciado10/>} />
          <Route path="/enunciado11" element={<Enunciado11/>} />
          <Route path="/foro" element={<Foro/>} />
          <Route path="/positions" exact element={<Positions/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
