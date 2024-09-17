import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Iniciogoogle from './components/Iniciogoogle';
import Loginsesion from './components/Loginsesion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Lesson from './components/Lesson';
import Posiciones from './components/Posiciones';
import Challenges from './components/Challenges';
import Lecciones from './components/Lecciones';
import Ejercicios1 from './components/Ejercicios1';
import Enunciado4 from './components/Enunciado4';
import Enunciado5 from './components/Enunciado5';
import Enunciado6 from './components/Enunciado6';
import Enunciado7 from './components/Enunciado7';
import Enunciado8 from './components/Enunciado8';
import Enunciado9 from './components/Enunciado9';
import Enunciado10 from './components/Enunciado10';
import Enunciado11 from './components/Enunciado11';
import Enunciado12 from './components/Enunciado12';
import Enunciado13 from './components/Enunciado13';
import Enunciado14 from './components/Enunciado14';
import Enunciado15 from './components/Enunciado15';
import Enunciado16 from './components/Enunciado16';
import Enunciado17 from './components/Enunciado17';
import Enunciado18 from './components/Enunciado18';
import Enunciado19 from './components/Enunciado19';
import Enunciado20 from './components/Enunciado20';
import Nivel1 from './components/Nivel1';
import Ej1 from './components/nivelFacil/Ej1';
import Ej2 from './components/nivelFacil/Ej2';
import Ej3 from './components/nivelFacil/Ej3';
import Ej4 from './components/nivelFacil/Ej4';
import Ej5 from './components/nivelFacil/Ej5';
import Ej6 from './components/nivelFacil/Ej6';
import Ej7 from './components/nivelIntermedio/Ej7';
import Ej8 from './components/nivelIntermedio/Ej8';
import Ej9 from './components/nivelIntermedio/Ej9';
import Ej10 from './components/nivelIntermedio/Ej10';
import Ej11 from './components/nivelIntermedio/Ej11';
import Ej12 from './components/nivelIntermedio/Ej12';
import Ej13 from './components/nivelDificil/Ej13';
import Ej14 from './components/nivelDificil/Ej14';
import Ej15 from './components/nivelDificil/Ej15';
import Ej16 from './components/nivelDificil/Ej16';
import Ej17 from './components/nivelDificil/Ej17';
import Ej18 from './components/nivelDificil/Ej18';
import Ej19 from './components/nivelDificil/Ej19';
import Ej20 from './components/nivelDificil/Ej20';
import Enunciado3 from './components/Enunciado3';
import Foro from './components/Foro';
import Examen from './components/Examen';
import Examennivel1 from './components/ExamenNivel1';
import EditorCodigo from './components/EditorCodigo';
import ProgresoBar from './components/ProgresoBar';

function App() {
  //const [view, setView] = useState('login'); // 'login', 'register', 'dashboard', 'profile'

  //7const toggleView = (newView) => {
    //setView(newView);
  //}; 

  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/iniciogoogle" element={<Iniciogoogle/>} />
            <Route path="/loginsesion" element={<Loginsesion/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/progreso" element={<ProgresoBar/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/lesson" element={<Lesson/>} />
            <Route path="/posiciones" element={<Posiciones/>} />
            <Route path="/challenges" element={<Challenges/>} />
            <Route path="/lecciones" element={<Lecciones/>} />
            <Route path="/ejercicios1" element={<Ejercicios1/>} />
            <Route path="/nivel1" element={<Nivel1/>} />
            <Route path="/enunciado3" element={<Enunciado3/>} />
            <Route path="/enunciado4" element={<Enunciado4/>} />
            <Route path="/enunciado5" element={<Enunciado5/>} />
            <Route path="/enunciado6" element={<Enunciado6/>} />
            <Route path="/enunciado7" element={<Enunciado7/>} />
            <Route path="/enunciado8" element={<Enunciado8/>} />
            <Route path="/enunciado9" element={<Enunciado9/>} />
            <Route path="/enunciado10" element={<Enunciado10/>} />
            <Route path="/enunciado11" element={<Enunciado11/>} />
            <Route path="/enunciado12" element={<Enunciado12/>} />
            <Route path="/enunciado13" element={<Enunciado13/>} />
            <Route path="/enunciado14" element={<Enunciado14/>} />
            <Route path="/enunciado15" element={<Enunciado15/>} />
            <Route path="/enunciado16" element={<Enunciado16/>} />
            <Route path="/enunciado17" element={<Enunciado17/>} />
            <Route path="/enunciado18" element={<Enunciado18/>} />
            <Route path="/enunciado19" element={<Enunciado19/>} />
            <Route path="/enunciado20" element={<Enunciado20/>} />
            <Route path="/ej1" element={<Ej1/>} />
            <Route path="/ej2" element={<Ej2/>} />
            <Route path="/ej3" element={<Ej3/>} />
            <Route path="/ej4" element={<Ej4/>} />
            <Route path="/ej5" element={<Ej5/>} />
            <Route path="/ej6" element={<Ej6/>} />
            <Route path="/ej7" element={<Ej7/>} />
            <Route path="/ej8" element={<Ej8/>} />
            <Route path="/ej9" element={<Ej9/>} />
            <Route path="/ej10" element={<Ej10/>} />
            <Route path="/ej11" element={<Ej11/>} />
            <Route path="/ej12" element={<Ej12/>} />
            <Route path="/ej13" element={<Ej13/>} />
            <Route path="/ej14" element={<Ej14/>} />
            <Route path="/ej15" element={<Ej15/>} />
            <Route path="/ej16" element={<Ej16/>} />
            <Route path="/ej17" element={<Ej17/>} />
            <Route path="/ej18" element={<Ej18/>} />
            <Route path="/ej19" element={<Ej19/>} />
            <Route path="/ej20" element={<Ej20/>} />
            <Route path="/foro" element={<Foro/>} />
            <Route path="/examen" element={<Examen/>} />
            <Route path="/examennivel1" element={<Examennivel1/>} />
            <Route path="/runcode" element={<EditorCodigo/>} />


          </Routes>

        </div>
      </Router>
    );
} 

export default App;

