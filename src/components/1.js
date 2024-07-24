import React, { useState } from 'react';
import '../styles/1.css'; // Asegúrate de que la ruta sea correcta

const Uno = ({ toggleView }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItem, setDroppedItem] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false); // Estado para mostrar el botón "Siguiente"

  const options = ['Mundo', 'Hola', 'Eduardo'];

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDroppedItem(draggedItem);
  };

  const handleVerify = () => {
    if (droppedItem === 'Mundo') {
      setIsCorrect(true);
      setShowNextButton(true); // Mostrar el botón "Siguiente" al verificar correctamente
    } else {
      setIsCorrect(false);
      setShowNextButton(false); // Ocultar el botón "Siguiente" si la respuesta es incorrecta
    }
  };

  const handleNext = () => {
    toggleView('enunciado3'); // Navegar a enunciado3.js
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => toggleView('ejercicios1')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atras
        </button>
        <button className="sidebar-button" onClick={() => toggleView('configuracion')}>
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
              <button className="icon-button" onClick={() => toggleView('dashboard')}>
                <img src="ubicacion.png" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
              </button>
            </div>
          </div>
          <div className={`nivel1-card`}>
            <div className="nivel1-card-header">
              <span>EJERCICIO #1</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                A continuación, te presentamos nuestro primer ejercicio de nivel 1. El ejercicio consiste en identificar la palabra correcta en relación con el siguiente enunciado. ¡Buena suerte!
                <br /><br />
                Por favor, arrastra la palabra que falta en el código para poder imprimir “Hola, Mundo:”
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <div className="code-content">
                  <pre>
                    <code>
                      print("Hola, ________!")
                    </code>
                  </pre>
                </div>
              </div>
              <div className="drag-container">
                {options.map((option) => (
                  <div
                    key={option}
                    className="drag-option"
                    draggable
                    onDragStart={(e) => handleDragStart(e, option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div
                className="drop-zone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                {droppedItem ? `print("Hola, ${droppedItem}!")` : 'Arrastra aquí la palabra correcta'}
              </div>
              <div className="button-container">
                <button className="nivel1-card-button" onClick={handleVerify}>
                  Verificar
                </button>
                {/* Botón "Siguiente" con animación de aparición */}
                {showNextButton && (
                  <button className={`nivel1-card-button next-button show`} onClick={handleNext}>
                    Siguiente
                  </button>
                )}
              </div>
              {/* Contenedor del resultado */}
              <div className="result-container">
                {isCorrect !== null && (
                  <p className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '¡Correcto!' : 'Inténtalo de nuevo.'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uno;
