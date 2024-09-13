import React, { useState } from 'react';
import '../styles/9.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

// Crea un objeto de audio global para su uso
const audio = new Audio('/boton.mp3');
audio.preload = 'auto';

const Nueve = ({ toggleView }) => {
  const [draggedNumber, setDraggedNumber] = useState('');
  const [result, setResult] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [output, setOutput] = useState('');
  const [score, setScore] = useState(0); // Define el estado para el puntaje
  const [currentTime] = useState(new Date().toLocaleString()); // Hora y Fecha actual
  const navigate = useNavigate(); // Hook para la redirección

  const checkAnswer = () => {
    // Compara si el número arrastrado es 46
    if (draggedNumber === '46') {
      setResult('correct');
      setShowNext(true); // Muestra el botón "Siguiente"
      setOutput(draggedNumber); // Muestra el valor en la salida
      setScore(score + 10); // Incrementa el puntaje cuando sea correcto
    } else {
      setResult('incorrect');
      setShowNext(false); // Oculta el botón "Siguiente"
      setOutput(''); // Limpia la salida si la respuesta es incorrecta
    }
  };

  const handleDragStart = (number) => {
    setDraggedNumber(number);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Función para reproducir sonido
  const playSound = () => {
    audio.currentTime = 0; // Reinicia el tiempo de reproducción para reproducir desde el principio
    audio.play().catch((error) => {
      // Maneja errores si ocurren
      console.error('Error reproduciendo el sonido:', error);
    });
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/ej7')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
        <div className="score">
          {/* Aquí podrías añadir más elementos si los necesitas */}
        </div>
      </div>

      {/* Contenedor principal con el cuadro de información y el contenido principal */}
      <div className="content">
        {/* Contenedor de información */}
        <div className="info-container">
          <div className="info-item">
            <h3>
              <img src="jugador.png" alt="Icono Nombre" className="info-icon" /> Nombre:
            </h3>
            <p>Eduardo Jose Daza</p>
          </div>
          <div className="info-item">
            <h3>
              <img src="puntaje.png" alt="Icono Puntaje" className="info-icon" /> Puntaje:
            </h3>
            <p>{score}</p>
          </div>
          <div className="info-item">
            <h3>
              <img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:
            </h3>
            <p>0</p>
          </div>
          <div className="info-item">
            <h3>
              <img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" /> Hora y Fecha:
            </h3>
            <p>{currentTime}</p>
          </div>
        </div>

        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="python1.png" alt="Icono Nivel" />
            </button>
            <div className="header-title">
              <h2>EJERCICIO #9</h2>
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
              </div>
              <div className="nivel1-card-body">
              <p>Cree una variable de tipo numérico que almacene el número 46</p>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div 
                  className="code-content"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <pre>
                    variable = <span className="drop-area">________</span>
                  </pre>
                </div>
              </div>

              <div className="options">
                <div
                  className="option"
                  draggable
                  onDragStart={() => handleDragStart('46')}
                  onMouseEnter={playSound} // Reproduce el sonido cuando el cursor está sobre el número
                >
                  46
                </div>
                <div
                  className="option"
                  draggable
                  onDragStart={() => handleDragStart('23')}
                  onMouseEnter={playSound} // Reproduce el sonido cuando el cursor está sobre el número
                >
                  23
                </div>
                <div
                  className="option"
                  draggable
                  onDragStart={() => handleDragStart('82')}
                  onMouseEnter={playSound} // Reproduce el sonido cuando el cursor está sobre el número
                >
                  82
                </div>
                <div
                  className="option"
                  draggable
                  onDragStart={() => handleDragStart('59')}
                  onMouseEnter={playSound} // Reproduce el sonido cuando el cursor está sobre el número
                >
                  59
                </div>
              </div>

              {result === 'correct' && (
                <div className="code-box">
                  <div className="code-header">SALIDA</div>
                  <input
                    type="text"
                    value={output}
                    className="code-input"
                    readOnly
                  />
                </div>
              )}

              <div className="nivel1-card-button-container">
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado10')} // Ajusta el número de vista siguiente si es necesario
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

export default Nueve;
