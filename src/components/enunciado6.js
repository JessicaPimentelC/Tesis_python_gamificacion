import React, { useState, useEffect } from 'react';
import '../styles/enunciado6.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Enunciado6 = ({ toggleView }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(''); // Estado para la hora y fecha actual
  const navigate = useNavigate(); // Hook para la redirección

  // Actualiza la hora y fecha al cargar el componente
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleString());
  }, []);

  const handleShowGif = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowContinue(true);
    }, 2000); // Asume que el GIF tiene una duración de 2 segundos
  };

  const handleContinueClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/6');
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => toggleView('5')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => toggleView('configuracion')}>
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

          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>¿Cómo se Utiliza la Función int para Trabajar con Números Enteros en Python?</span>
            </div>
            <div className="nivel1-card-body">
              <p>
              En Python, la función int se utiliza para convertir valores a enteros.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                    {`numero = int(input("ingrese el numero:"));`}
                  </code>
                </pre>
              </div>

              {!showGif && (
                <div className="nivel1-card-button-container">
                  <button className="nivel1-card-button" onClick={handleShowGif}>
                    Ver Simulación
                  </button>
                </div>
              )}

              {showGif && (
                <div className="gif-container">
                  <img src="gif6.gif" alt="GIF" className="gif-image" />
                </div>
              )}

              {showContinue && (
                <div className="nivel1-card-button-container">
                  <button className="nivel1-card-button" onClick={handleContinueClick}>
                    Continuar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
          <h2>¡Excelente avance en Python!</h2>
            <p>
            🌟 ¡Bien hecho! 🚀 Ahora aprenderás a usar la función `int` para trabajar con números enteros. Sigue así y sigue descubriendo más sobre Python.
            </p>

            <img src="000.gif" alt="GIF de bienvenida" className="modal-gif" />
            <button className="modal-close-button" onClick={handleCloseModal}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enunciado6;
