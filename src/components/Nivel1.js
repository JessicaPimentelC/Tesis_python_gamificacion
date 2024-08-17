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
          <p>¡El primer paso está dado, comencemos juntos este nivel!</p>
          <div className={`nivel1-card ${showNext ? 'fade-out' : ''}`}>
            <div className="nivel1-card-header">
              <span>HISTORIA DEL LENGUAJE DE PROGRAMACION PYTHON</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                Guido van Rossum, un programador holandés, creó Python en la década de 1980 y lo lanzó por primera vez en 1991. Van Rossum trabajaba en el Centrum Wiskunde & Informatica (CWI) en los Países Bajos cuando comenzó a desarrollar Python como un proyecto secundario para mantenerse ocupado durante las vacaciones de Navidad. Nombró el lenguaje en honor al grupo de comedia británico Monty Python, no por la serpiente. Python fue diseñado con una filosofía que enfatiza la legibilidad del código y la simplicidad. Van Rossum quería crear un lenguaje que fuera fácil de entender y escribir, reduciendo la cantidad de código necesario para expresar conceptos complejos. Los principios subyacentes de Python están resumidos en el documento "The Zen of Python" por Tim Peters, que incluye aforismos como "Beautiful is better than ugly" (lo bello es mejor que lo feo) y "Simple is better than complex" (lo simple es mejor que lo complejo).
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
