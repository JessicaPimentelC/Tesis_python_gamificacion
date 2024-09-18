import React, { useState } from 'react';
import '../styles/2.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Dos = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();

  const checkAnswer = () => {
    if (input1.trim().toLowerCase() === '75') {
      setResult('correct');
      setShowNext(true); // Muestra el botón "Siguiente"
    } else {
      setResult('incorrect');
      setShowNext(false); // Oculta el botón "Siguiente"
    }
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/1')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atras
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
        <div className="score">
          {/* Aquí podrías añadir más elementos si los necesitas */}
        </div>
      </div>
      <div className="content">
        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="python1.png" alt="Icono Nivel" />
            </button>
            <div className="header-title">
              <h2>NIVEL 1</h2>
            </div>
            <div className="header-status">
              <span></span>
              <button className="icon-button">
                <img src="informacion.png" alt="Icono Moneda" />
              </button>
              <button className="icon-button" onClick={() => navigate('/dashboard')}>
                <img src="ubicacion.png" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
              </button>
            </div>
          </div>
          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>EJERCICIO #2</span>
            </div>
            <div className="nivel1-card-body">
              <p>
              Completa el siguiente código en Python para que funcione correctamente. El codigo debe imprimir el número 75
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                  <div className="code-content">
                  <pre>
                    <code>
                      print(" <input
                        type="text"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        className="code-input"
                      />{' '}")
                    </code>
                  </pre>
                </div>  
                  </code>
                </pre>
              </div>
              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado3')} // Cambiado a '3'
                  >
                    Siguiente
                  </button>
                )}
              </div>
              {result && (
                <div className={`result ${result}`}>
                  {result === 'correct' ? 'Correcto' : 'Inténtalo de nuevo'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dos;
