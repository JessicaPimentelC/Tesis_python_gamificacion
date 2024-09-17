import React, { useState, useEffect } from 'react';
import '../../styles/1.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import ProgresoBar from '../ProgresoBar';


const Uno = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItem, setDroppedItem] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [score, setScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const navigate = useNavigate();

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
      setShowNextButton(true);
      setScore(score + 10);
      
      // Reproducir el sonido de victoria
      const winningAudio = new Audio('/ganar.mp3'); // Ruta desde la carpeta public
      winningAudio.play().catch(error => console.error('Error al reproducir el audio:', error));
    } else {
      setIsCorrect(false);
      setShowNextButton(false);
      
      // Reproducir el sonido de derrota
      const losingAudio = new Audio('/perder.mp3'); // Ruta desde la carpeta public
      losingAudio.play().catch(error => console.error('Error al reproducir el audio:', error));
    }
  };

  const handleNext = () => {
    navigate('/enunciado3');
  };

  // Función para redirigir a la página de insignias
  const handleInsigniaClick = () => {
    navigate('/insignias');
  };

  // Manejo del modal al hacer clic en el pingüino
  const handlePenguinClick = () => {
    setShowModal(true); // Mostrar el modal cuando se haga clic en el pingüino
  };

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="nivel1-container">
      {/* Sección de la barra lateral */}
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/ejercicios1')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atras
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
        
        {/* Contenedor del pingüino */}
        <div className="nivel1-container">
          <div className="penguin-container" onClick={handlePenguinClick}>
            <div className="penguin">
              <div className="eye left"></div>
              <div className="eye right"></div>
              <div className="beak"></div>
              <div className="foot left"></div>
              <div className="foot right"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Contenedor principal con el cuadro de información y el contenido principal */}
      <div className="content">
        {/* Contenedor de información sin GIF */}
        <div className="info-container">
          <div className="info-item">
            <h3><img src="jugador.png" alt="Icono Nombre" className="info-icon" /> Nombre:</h3>
            <p>Eduardo Jose Daza</p>
          </div>
          <div className="info-item">
            <h3><img src="puntaje.png" className="info-icon" /> Puntaje:</h3>
            <p>{score}</p>
          </div>
          <div className="info-item">
            <h3><img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:</h3>
            <div className="icons-container">
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="fugaz.gif" alt="Insignia 1" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="ganar.gif" alt="Insignia 2" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="gps.gif" alt="Insignia 3" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="caja.gif" alt="Insignia 4" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="medalla.gif" alt="Insignia 5" />
              </button>
            </div>
          </div>
          <div className="info-item">
            <h3><img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" /> Hora y Fecha:</h3>
            <p>{currentTime}</p>
          </div>
        </div>

        {/* Sección principal con el ejercicio */}
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
                <img src="mapas.gif" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
              </button>
            </div>
          </div>
          <div className="nivel1-card">
            <ProgresoBar/>
          </div>
          <div className="nivel1-card">
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
                {showNextButton && (
                  <button className={`nivel1-card-button next-button show`} onClick={handleNext}>
                    Siguiente
                  </button>
                )}
              </div>
              <div className="result-container">
                {isCorrect !== null && (
                  <p className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '¡Correcto!' : 'Inténtalo de nuevo'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>¡Hola, soy pingui!</h2>
      <p>Aquí podrás encontrar todas las ayudas que necesites para completar los ejercicios. ¡No dudes en consultarlo cuando lo necesites!</p>
      
      <div className="nivel1-card-header">
        <p>Seleccione una Ayuda:</p>
      </div>

      {/* Contenedor de los iconos en forma vertical */}
      <div className="modal-icons">
        <button className="modal-icon-button" onClick={() => alert('Ayuda 1: Idea')}>
          <img src="idea.gif" alt="Icono 1" className="modal-icon" />
        </button>

        <button className="modal-icon-button" onClick={() => alert('Ayuda 2: Apoyo')}>
          <img src="apoyo.gif" alt="Icono 2" className="modal-icon" />
        </button>

        <button className="modal-icon-button" onClick={() => alert('Ayuda 3: Cuaderno')}>
          <img src="cuaderno.gif" alt="Icono 3" className="modal-icon" />
        </button>
      </div>

      <button onClick={closeModal}>Cerrar</button>
    </div>
    </div>
  )}


      </div>
    );
  };

export default Uno;