import React, { useState, useEffect } from 'react';
import '../styles/enunciado23.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Enunciado23 = ({ score = 0 }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();
  const [hoveredInsignia, setHoveredInsignia] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleString();
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShowGif = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowContinue(true);
    }, 2000);
  };

  const handleContinueClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/23');
  };

  const handleInsigniaClick = () => {
    navigate('/insignias');
  };

  const handleMouseEnter = (name) => {
    setHoveredInsignia(name);
  };

  const handleMouseLeave = () => {};

  return (
    <div className="nivel1-container">
      <Sidebar />
      <div className="content">
        <div className="white-background">
          <div className="header">
            <div className="icons-container">
              {/* Insignias */}
              {[
                { src: "tres.png", name: "Insignia 1" },
                { src: "bombillo.png", name: "Insignia 2" },
                { src: "megafono.png", name: "Insignia 3" },
                { src: "cohetee.png", name: "Insignia 4" },
                { src: "accion.png", name: "Insignia 6" },
                { src: "25.png", name: "Insignia 7" },
                { src: "26.png", name: "Insignia 8" },
                { src: "22.png", name: "Insignia 9" },
                { src: "23.png", name: "Insignia 10" },
                { src: "24.png", name: "Insignia 5" },
              ].map((insignia, index) => (
                <div key={index} className="circular-icon-container">
                  <button
                    className="circular-icon"
                    onClick={handleInsigniaClick}
                    onMouseEnter={() => handleMouseEnter(insignia.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={insignia.src} alt={insignia.name} />
                  </button>
                  {hoveredInsignia === insignia.name && <p className="hovered-insignia">{insignia.name}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="header-title">
                <h2>NIVEL 1</h2>
                <div className="header-status">
                <span></span>
                <button className="icon-button">
                  <img src="informacion.png" alt="Icono Moneda" />
                </button>
                <button className="icon-button" onClick={() => navigate('/dashboard')}>
                  <img src="colombia.png" alt="Icono Pregunta" />
                </button>
                <button className="icon-button">
                  <img src="persona.png" alt="Icono Perfil" />
                </button>
                
              </div>
              </div>
          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>Cálculo del Promedio de dos Números</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                Python nos permite realizar cálculos de manera sencilla e interactiva. En esta actividad, crearás un
                algoritmo que solicite al usuario ingresar dos números y, luego, muestre en pantalla el promedio de ambos.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <code>
                  {`primerNum = int(input("Ingrese el primer número"))\nsegundoNum = int(input("Ingrese el segundo número"))\nprint("El promedio de los números es: ", (primerNum + segundoNum) / 2)`}
                </code>
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
                  <img src=".gif" alt="GIF" className="gif-image" />
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
            <h2>¡Bien hecho avanzando en Python!</h2>
            <p>
              🌟 ¡Estás progresando muy bien en tu aprendizaje de Python! 🚀 Ahora es el momento de poner en práctica tus
              conocimientos con un nuevo ejercicio. Prepárate para aplicar lo que has aprendido hasta ahora y seguir
              avanzando.
            </p>
            <img src=".gif" alt="GIF de bienvenida" className="modal-gif" />
            <button className="modal-close-button" onClick={handleCloseModal}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enunciado23;
