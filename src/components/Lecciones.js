import React from 'react';
import '../styles/Lecciones.css';
import { useNavigate } from 'react-router-dom';


const Lecciones = ({ toggleView }) => {
  const navigate = useNavigate(); // Hook para la redirección


  return (
    <div className="lecciones-container">
      <div className="sidebar">
        
        <img src="tesis.png" alt="Logo" className="logo" />
        <div className="score">
        </div>
      </div>
      <div className="content">
        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="bandera.png" alt="Profile" className="profile" />
            </button>
            <button className="icon-button">
              <img src="medalla.png" alt="Notification" className="notification" />
            </button>
            <button className="icon-button">
              <img src="mensaje.png" alt="Help" className="help" />
            </button>
            <button className="icon-button">
              <img src="AYUDA.jpeg" alt="Profile" className="profile" />
            </button>
          </div>
          <h1>BIENVENIDOS AL CURSO DE LENGUAJE DE PROGRAMACION PYTHON</h1>
          <div className="levels">
            <button className="level-button" onClick={() => navigate('/nivel1')}>
              <img src="python1.png" alt="Level 1" />
              <span>NIVEL 1</span>
            </button>
            <button className="level-button">
              <img src="py.png" alt="Level 2" />
              <span>NIVEL 2</span>
            </button>
            <button className="level-button">
              <img src="python2.png" alt="Level 3" />
              <span>NIVEL 3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Lecciones;


