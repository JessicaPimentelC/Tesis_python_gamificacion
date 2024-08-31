import React, { useState } from 'react';
import '../styles/4.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Cuatro = () => {
  const [droppedWords, setDroppedWords] = useState([]);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    // Añade la palabra soltada al array, asegurando que no se repita
    if (!droppedWords.includes(data)) {
      setDroppedWords([...droppedWords, data]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkAnswer = () => {
    if (droppedWords.includes('print')) {
      setScore(score + 10);
      setShowNext(true);
      setErrorMessage("");
    } else {
      setErrorMessage('Inténtalo de nuevo');
      setShowNext(false);
    }
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/ej3')}>
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
              <h2>EJERCICIO #4</h2>
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
              <span>Ejercicio de Programación</span>
              <p>Arrastra la palabra <strong>`print`</strong> al cuadro de código y verifica tu respuesta.</p>
            </div>
            <div className="nivel1-card-body">
              <div
                className="code-box"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="code-header">Código:</div>
                <div className="code-content">
                  {droppedWords.includes('print') ? 'print("70 / 2")' : '______("70 / 2")'}
                </div>
              </div>

              <div className="draggable-words">
                <div
                  id="print"
                  className="draggable-word"
                  draggable
                  onDragStart={handleDragStart}
                >
                  print
                </div>
                <div
                  id="else"
                  className="draggable-word"
                  draggable
                  onDragStart={handleDragStart}
                >
                  else
                </div>
                <div
                  id="customWord"
                  className="draggable-word"
                  draggable
                  onDragStart={handleDragStart}
                >
                  customWord
                </div>
              </div>

              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado5')}
                  >
                    Siguiente
                  </button>
                )}
              </div>

              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}

              <div className="score-container">
                <img src="puntaje.png" alt="Icono Puntaje" className="score-icon" />
                <p className="score-text">Puntaje: {score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuatro;
