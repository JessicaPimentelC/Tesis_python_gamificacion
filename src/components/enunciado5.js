import React, { useState, useEffect } from 'react';
import '../styles/enunciado5.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Enunciado5 = ({ toggleView }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0); // Suponiendo que hay un estado para el puntaje
  const [currentTime, setCurrentTime] = useState(''); // Estado para la hora y fecha actual
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleString()); // Actualiza la hora y fecha actual
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
    navigate('/5');
  };

  const handleInsigniaClick = () => {
    navigate('/insignias'); // Redirige a la página de insignias
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => toggleView('nivel1')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => toggleView('configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
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
              <span>¿Para Qué Sirve la Función input en Python?</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                En Python, la función input se utiliza para capturar datos ingresados por el usuario durante la ejecución del programa.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                    {`cadena = input("ingrese el texto:")`}
                  </code>
                </pre>
              </div>

              <div className="code-box">
                <div className="code-header">Ejemplo con print</div>
                <pre className="code-content">
                  <code>
                    {`print("Hola, mundo!")`}
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
                  <img src="gif5.gif" alt="GIF" className="gif-image" />
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
            <h2>¡Vamos por buen camino en Python!</h2>
            <p>
              🌟 ¡Genial trabajo! 🚀 Ahora aprenderás a usar `input` para captar datos del usuario. ¡Sigue adelante!
            </p>
            <img src="3hyC.gif" alt="GIF de bienvenida" className="modal-gif" />
            <button className="modal-close-button" onClick={handleCloseModal}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enunciado5;
