import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/enunciado18.css'; // Asegúrate de que la ruta sea correcta
import Sidebar from './Sidebar';

const Enunciado18 = ({ toggleView }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Estado para la hora y fecha actual
  const navigate = useNavigate(); // Hook para la redirección
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover


  useEffect(() => {
    // Actualiza la hora y fecha cada minuto
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);
    return () => clearInterval(interval);
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
    navigate('/18'); // Cambia la vista al siguiente componente
  };

  const handleInsigniaClick = () => {
    // Función para manejar el clic en las insignias
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };
  return (
    <div className="nivel1-container">
      <Sidebar></Sidebar>
      <div className="content">
      <div className="white-background">
            <div className="header">
            <div className="icons-container">
                {[
                { src: "tres.png", name: "Insignia 1" },
                { src: "bombillo.png", name: "Insignia 2" },
                { src: "megafono.png", name: "Insignia 3" },
                { src: "cohetee.png", name: "Insignia 4" },
                { src: "accion.png", name: "Insignia 6  " },
                { src: "25.png", name: "Insignia 7  " },
                { src: "26.png", name: "Insignia 8  " },
                { src: "22.png", name: "Insignia 9  " },
                { src: "23.png", name: "Insignia 10  " },
                { src: "24.png", name: "Insignia 5  " },
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
              {/*aquui es donde van la insignias*/}
             
              
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
              <span>Cálculo de Área de Cuadrado</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                En este ejercicio, aprenderás a calcular el área de un cuadrado en Python. El área se calcula multiplicando la longitud de un lado por sí misma.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                    {`lado = float(input("Ingresa la longitud del lado del cuadrado: "))
area = lado ** 2
print("El área del cuadrado es:", area)
`}
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
                  <img src="enunciado18.gif" alt="GIF" className="gif-image" />
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
            <h2>¡Sigue avanzando en Python!</h2>
            <p>
              🌟 ¡Increíble! 🚀 Ahora has aprendido a calcular el área de un cuadrado en Python. Sigue practicando y mejorando tus habilidades. ¡Adelante, lo estás haciendo genial!
            </p>
            <img src="fxSL.gif" alt="GIF de bienvenida" className="modal-gif" />
            <button className="modal-close-button" onClick={handleCloseModal}>
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enunciado18;
