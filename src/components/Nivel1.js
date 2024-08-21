import React, { useState } from 'react';
import '../styles/Nivel1.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';


const Nivel1 = ({ toggleView }) => {
  const [showNext, setShowNext] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate(); // Hook para la redirección

  const handleNextClick = () => {
    setShowNext(true);
  };

  const handleContinueClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmYes = () => {
    navigate('/ejercicios1'); // Cambia la vista al módulo Ejercicios1
  };

  const handleConfirmNo = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/lecciones')}>
          <img src="hogar.png" alt="Inicio" className="sidebar-icon" />
          INICIO
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
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
              <button className="icon-button">
                <img src="ubicacion.png" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
              </button>
            </div>
          </div>
          <p>¡𝙀𝙡 𝙥𝙧𝙞𝙢𝙚𝙧 𝙥𝙖𝙨𝙤 𝙚𝙨𝙩á 𝙙𝙖𝙙𝙤, 𝙘𝙤𝙢𝙚𝙣𝙘𝙚𝙢𝙤𝙨 𝙟𝙪𝙣𝙩𝙤𝙨 𝙚𝙨𝙩𝙚 𝙣𝙞𝙫𝙚𝙡!</p>
          <div className={`nivel1-card ${showNext ? 'fade-out' : ''}`}>
            <div className="nivel1-card-header">
              <span>Python: Un Lenguaje de Programación Innovador y Versátil</span>
            </div>
            <div className="nivel1-card-body">
              <p>
              Python es un lenguaje de programación de alto nivel, conocido por su simplicidad y claridad. Facilita el desarrollo de soluciones eficientes y es ampliamente utilizado en áreas como desarrollo web e inteligencia artificial, gracias a su versatilidad y una comunidad activa que impulsa su evolución.
              </p>
              <div className="nivel1-card-button-container">
                {!showNext && (
                  <button className="nivel1-card-button" onClick={handleNextClick}>
                    Siguiente
                  </button>
                )}
              </div>
            </div>
          </div>
          {showNext && !showConfirmation && (
            <div className="nivel1-next-section show">
              <h2>¿Por qué aprender Python?</h2>
              <p>
                Python es uno de los lenguajes de programación más populares y versátiles del mundo. Es conocido por su sintaxis sencilla y legibilidad, lo que lo convierte en una excelente opción para principiantes y expertos por igual. Python es utilizado en una amplia variedad de campos, incluyendo desarrollo web, ciencia de datos, inteligencia artificial, automatización, y más. Aprender Python puede abrir numerosas oportunidades laborales y facilitar el aprendizaje de otros lenguajes de programación. Su extensa comunidad y recursos disponibles hacen que sea un lenguaje accesible y práctico para cualquier proyecto.
              </p>
              <div className="nivel1-next-button-container">
                <button className="nivel1-next-button" onClick={handleContinueClick}>Continuar</button>
              </div>
            </div>
          )}
          {showConfirmation && (
            <div className="confirmation-popup">
              <p>¿Estás listo para empezar esta aventura de la programación?</p>
              <div className="confirmation-buttons">
                <button className="confirmation-button" onClick={handleConfirmYes}>Sí</button>
                <button className="confirmation-button" onClick={handleConfirmNo}>No</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nivel1;
