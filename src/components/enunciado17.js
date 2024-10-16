import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/enunciado17.css'; // Asegúrate de que la ruta sea correcta
import Sidebar from './Sidebar';

const Enunciado17 = ({ toggleView }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showElifModal, setShowElifModal] = useState(false);
  const [showElseModal, setShowElseModal] = useState(false);
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
    navigate('/17'); // Cambia la vista al siguiente componente
  };

  const handleElifClick = () => {
    setShowElifModal(true);
  };

  const handleCloseElifModal = () => {
    setShowElifModal(false);
  };

  const handleElseClick = () => {
    setShowElseModal(true);
  };

  const handleCloseElseModal = () => {
    setShowElseModal(false);
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };
  const handleInsigniaClick = () => {
    // Maneja la lógica cuando se hace clic en una insignia
    console.log('Insignia clickeada');
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
              <span>Ejercicio 16: Verificación de Números</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                En este ejercicio, aprenderás a verificar si un número es positivo, negativo o cero en Python utilizando las estructuras de control <strong>if</strong>, <strong>elif</strong> y <strong>else</strong>.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                    {`numero = float(input("Ingresa un número: "))
if numero > 0:
    print("El número es positivo")
`}                
                    <span className="clickable" onClick={handleElifClick}>elif</span>
                    {` numero < 0:
    print("El número es negativo")
`}
                    <span className="clickable" onClick={handleElseClick}>else</span>
                    {`:
    print("El número es cero")
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
                  <img src="enunciado17.gif" alt="GIF" className="gif-image" />
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
              🌟 ¡Genial! 🚀 Ahora has aprendido a verificar números en Python usando las estructuras <strong>if</strong>, <strong>elif</strong>, y <strong>else</strong>. Sigue practicando y mejorando tus habilidades. ¡Adelante, lo estás haciendo genial!
            </p>
            <img src="3ww9.gif" alt="GIF de bienvenida" className="modal-gif" />
            <button className="modal-close-button" onClick={handleCloseModal}>
              Continuar
            </button>
          </div>
        </div>
      )}

      {showElifModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Explicación de 'elif'</h2>
            <p>
              <strong>elif</strong> es una combinación de 'else' y 'if', que te permite verificar múltiples condiciones. Se usa después de un 'if' y antes de un 'else', y se ejecuta solo si la condición del 'if' anterior es falsa.
            </p>
            <button className="modal-close-button" onClick={handleCloseElifModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {showElseModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Explicación de 'else'</h2>
            <p>
              <strong>else</strong> se utiliza al final de una estructura condicional. Si ninguna de las condiciones anteriores es verdadera, entonces se ejecutará el bloque 'else'.
            </p>
            <button className="modal-close-button" onClick={handleCloseElseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enunciado17;
