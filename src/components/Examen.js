import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Examen.css';
import Sidebar from './Sidebar';

function Examen() {
  const navigate = useNavigate();

  const startExam = () => {
    navigate('/examennivel1'); // Navigate to Examennivel1 module
  };

  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <header className="header header-examen"> {/* Aplicar la clase específica aquí */}
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
