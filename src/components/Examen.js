import React from 'react';
import '../styles/Examen.css'; // Asegúrate de que la ruta sea correcta

function Examen() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          {/* Aquí puedes colocar el logo de Python */}
          <img src="path_to_logo.png" alt="Python Logo" />
        </div>
        <nav>
          <ul>
            <li>PANEL DE CONTROL</li>
            {/* Otros elementos del panel */}
          </ul>
        </nav>
      </aside>
      <header className="header">
        <div className="user-info">
          {/* Coloca aquí los iconos de usuario, notificaciones, etc. */}
          <span>143 <img src="path_to_icon.png" alt="Diamond Icon" /></span>
          {/* Otros iconos */}
        </div>
      </header>
      <main className="main-content">
        <h1>Bienvenidos al Examen Final</h1>
        <div className="exam-instructions">
          <p>Instrucciones para el examen...</p>
        </div>
        <button className="start-exam">Iniciar Examen</button>
      </main>
    </div>
  );
}

export default Examen;
