import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Examen.css';

function Examen() {
  const navigate = useNavigate();

  const startExam = () => {
    navigate('/examennivel1'); // Navigate to Examennivel1 module
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Python Logo" className="python-logo" />
        </div>
        <nav>
          <ul>
            <li><img src="flecha.png" alt="Atrás" className="icon" /> ATRÁS</li>
            <li><img src="configuracion.png" alt="Configuración" className="icon" /> CONFIGURACIÓN</li>
          </ul>
        </nav>
      </aside>
      <header className="header">
        <div className="user-info">
          <img src="python1.png" alt="Ayuda" className="icon" />
          <span><img src="puntaje.png" alt="Diamond Icon" className="icon" />10</span>
          <img src="informacion.png" alt="Ayuda" className="icon" />
          <img src="ubicacion.png" alt="Mapa" className="icon" />
          <img src="AYUDA.jpeg" alt="Usuario" className="avatar" />
        </div>
      </header>
      <main className="main-content">
        <h1>Bienvenidos al Examen Final</h1>
        <div className="exam-instructions">
          <p>Instrucciones para el examen...</p>
        </div>
        <button className="start-exam" onClick={startExam}>Iniciar Examen</button>
      </main>
    </div>
  );
}

export default Examen;
