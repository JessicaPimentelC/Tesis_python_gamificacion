import React, { useState, useEffect } from 'react';
import '../styles/enunciado5.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Enunciado5 = ({ toggleView }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0); // Suponiendo que hay un estado para el puntaje
  const [currentTime, setCurrentTime] = useState(''); // Estado para la hora y fecha actual
  const navigate = useNavigate();
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover
  

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
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };

  return (
    <div className="nivel1-container">
      <Sidebar></Sidebar>

      {/* Contenedor principal con el cuadro de información y el contenido principal */}
      <div className="content">
        {/* Contenedor de información */}
        
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
