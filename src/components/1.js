import React, { useState, useEffect } from "react";
import "../styles/1.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator"; // Importa el nuevo componente
import Sidebar from "./Sidebar";
import HeaderBody from "./HeaderBody";
import ProgressBar from "./ProgressBar";
import Mapa from "./Mapa";
import PinguinoModal from "./PinguinoModal";


const Uno = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItem, setDroppedItem] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [score, setScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [isOpen, setIsOpen] = useState(false); // Estado para la barra lateral
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenPinguino, setIsModalOpenPinguino] = useState(false);


  const navigate = useNavigate();


  const options = ["Mundo", "Hola", "Eduardo"];


  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };


  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModalPinguino = () => {
    setIsModalOpenPinguino(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDroppedItem(draggedItem);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si se hace clic fuera de los iconos, se oculta el nombre
      if (!event.target.closest(".circular-icon-container")) {
        setHoveredInsignia(null);
      }
    };


    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleVerify = () => {
    if (droppedItem === "Mundo") {
      setIsCorrect(true);
      setShowNextButton(true);
      setScore(score + 10);


      // Reproducir el sonido de victoria
      const winningAudio = new Audio("/ganar.mp3"); // Ruta desde la carpeta public
      winningAudio
        .play()
        .catch((error) =>
          console.error("Error al reproducir el audio:", error)
        );
    } else {
      setIsCorrect(false);
      setShowNextButton(false);


      // Reproducir el sonido de derrota
      const losingAudio = new Audio("/perder.mp3"); // Ruta desde la carpeta public
      losingAudio
        .play()
        .catch((error) =>
          console.error("Error al reproducir el audio:", error)
        );
    }
  };


  const handleNext = () => {
    navigate("/enunciado3");
  };


  // Función para redirigir a la página de insignias
  const handleInsigniaClick = () => {
    navigate("/insignias");
  };


  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };
  const closeModalPinguino = () => {
    setIsModalOpenPinguino(false); // Cerrar el modal
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
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


  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Definición de la función
  };


  const handlePythonIconClick = () => {
    console.log("Botón de Python clickeado"); // Para verificar el clic
    setIsModalOpenPinguino((prevState) => !prevState); // Alterna el estado del modal
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
              <div className="icons-container">
                {[
                  { src: "tres.png", name: "Insignia 1" },
                  { src: "bombillo.png", name: "Insignia 2" },
                  { src: "megafono.png", name: "Insignia 3" },
                  { src: "cohetee.png", name: "Insignia 4" },
                  { src: "accion.png", name: "Insignia 6  " },
               
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
                    {hoveredInsignia === insignia.name && (
                      <p className="hovered-insignia">{insignia.name}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>


            <div className="header-title">
              <h2>NIVEL 1</h2>
              <div className="header-status">
                <span></span>
                <button className="icon-button" onClick={handlePythonIconClick}>
                  <img src="muñeco.png" alt="Icono Moneda" />
                </button>
                {isModalOpenPinguino && (
                  <PinguinoModal onClick={handlePythonIconClick} />
                )}
                <button className="icon-button-mapa" onClick={openModal}>
                  <img
                    src="colombia.png"
                    alt="Icono Mapa"
                    className="info-icon"
                  />
                </button>
                {isModalOpen && (
                  <div className="modal-mapa">
                    <div className="modal-content-mapa">
                      <h2 style={{ textAlign: "center" }}>Mapa</h2>
                      <button className="close-button" onClick={closeModal}>
                        Cerrar
                      </button>
                      <Mapa /> {/* Aquí se muestra el mapa dentro del modal */}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="nivel1-card">
              <div className="nivel1-card-header">
                <span>EJERCICIO #1</span>
              </div>
              <div className="nivel1-card-body-ejer1">
                <p>
                  A continuación, te presentamos nuestro primer ejercicio de
                  nivel 1. El ejercicio consiste en identificar la palabra
                  correcta en relación con el siguiente enunciado. ¡Buena
                  suerte!
                  <br />
                  <br />
                  Por favor, arrastra la palabra que falta en el código para
                  poder imprimir “Hola, Mundo:”
                </p>
                <div className="code-box">
                  <div className="code-header">Python</div>
                  <div className="code-content">
                    <pre>
                      <code>print("Hola, ________!")</code>
                    </pre>
                  </div>
                </div>
                <div className="drag-container">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="drag-option"
                      draggable
                      onDragStart={(e) => handleDragStart(e, option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <div
                  className="drop-zone"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  {droppedItem
                    ? `print("Hola, ${droppedItem}!")`
                    : "Arrastra aquí la palabra correcta"}
                </div>
                <div className="button-container">
                  <button className="nivel1-card-button" onClick={handleVerify}>
                    Verificar
                  </button>
                  {showNextButton && (
                    <button
                      className={`nivel1-card-button next-button show`}
                      onClick={handleNext}
                    >
                      Siguiente
                    </button>
                  )}
                </div>
                <div className="result-container">
                  {isCorrect !== null && (
                    <p
                      className={`result ${
                        isCorrect ? "correct" : "incorrect"
                      }`}
                    >
                      {isCorrect ? "¡Correcto!" : "Inténtalo de nuevo"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>


          <div className="player-info">
            <div className="icon-background">
              <img
                src="empresario.png"
                alt="Icono Nombre"
                className="info-icon"
              />
            </div>
            <div className="text-content">
              <h3>¡Bienvenido!</h3>
              <p>
                <strong>Eduardo José Daza</strong>
              </p>
            </div>
           
            <div class="score-container">
            <img src="baa.png" alt="Icono Nombre" className="info-icon" />
            <h3 class="score-title">Puntaje:</h3>
            <p class="score-value">{score}</p>
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


export default Uno;





