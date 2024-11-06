import React, { useState, useEffect } from "react";
import '../styles/Nivel1.css'; 
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Nivel1 = () => {
  const [input1, setInput1] = useState("");
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [showNext, setShowNext] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate(); // Hook para la redirección
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  const checkAnswer = () => {
    if (input1.trim().toLowerCase() === "75") {
      setResult("correct");
      setShowNext(true); // Muestra el botón "Siguiente"
    } else {
      setResult("incorrect");
      setShowNext(false); // Oculta el botón "Siguiente"
    }
  };
  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
    <div className="nivel1-page">
      <Sidebar></Sidebar>
      {/* Barra de carga alineada a la izquierda de la pantalla */}
      {/**<div className="loading-indicator-outer">
        <LoadingIndicator /> {/* Reemplaza ProgressBar con LoadingIndicator </div>**/}
      <div className="nivel1-container">
        {/* Contenedor principal con el cuadro de información y el contenido principal */}
        <div className="content">
          {/* Contenedor de información sin GIF */}

          {/* Sección principal con el ejercicio */}

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
          {showNext && !showConfirmation && (
            <div className="nivel1-next-section show">
              <h2>¿Por qué aprender Python?</h2>
              <p>
              Python es un lenguaje de programación popular y versátil, conocido por su sintaxis sencilla y fácil de leer, ideal tanto para principiantes como para expertos. Se utiliza en diversos campos como desarrollo web, ciencia de datos, inteligencia artificial y automatización. Aprender Python abre muchas oportunidades laborales y facilita el aprendizaje de otros lenguajes. Además, su amplia comunidad y recursos lo hacen accesible y práctico para todo tipo de proyectos.
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
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>¡Hola, soy pingui jessica!</h2>
            <p>
              Aquí podrás encontrar todas las ayudas que necesites para
              completar los ejercicios. ¡No dudes en consultarlo cuando lo
              necesites!
            </p>

            <div className="nivel1-card-header">
              <p>Seleccione una Ayuda:</p>
            </div>

            {/* Contenedor de los iconos en forma vertical */}
            <div className="modal-icons">
              <button
                className="modal-icon-button"
                onClick={() => alert("Ayuda 1: Idea")}
              >
                <img src="idea.gif" alt="Icono 1" className="modal-icon" />
              </button>

              <button
                className="modal-icon-button"
                onClick={() => alert("Ayuda 2: Apoyo")}
              >
                <img src="apoyo.gif" alt="Icono 2" className="modal-icon" />
              </button>

              <button
                className="modal-icon-button"
                onClick={() => alert("Ayuda 3: Cuaderno")}
              >
                <img src="cuaderno.gif" alt="Icono 3" className="modal-icon" />
              </button>
            </div>

            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nivel1;
