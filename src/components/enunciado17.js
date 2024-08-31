import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/enunciado17.css'; // Asegúrate de que la ruta sea correcta

const Enunciado17 = ({ toggleView }) => {
  const [showGif, setShowGif] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showElifModal, setShowElifModal] = useState(false);
  const [showElseModal, setShowElseModal] = useState(false);
  const navigate = useNavigate(); // Hook para la redirección

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

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => toggleView('9')}>
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
      <div className="content">
        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="python1.png" alt="Icono Nivel" />
            </button>
            <div className="header-title">
              <h2>NIVEL 6</h2>
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
              <span>Ejercicio 6: Verificación de Números</span>
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
