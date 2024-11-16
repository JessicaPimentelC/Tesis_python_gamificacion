import React, { useState } from "react";
import "../styles/30.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PinguinoModal from "./PinguinoModal";
import Mapa from "./Mapa";

const Treinta = () => {
  // Estado para manejar las opciones disponibles
  const [options, setOptions] = useState(["=", "<>", "*", "''"]);
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover
  const [isModalOpenPinguino, setIsModalOpenPinguino] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModalPinguino = () => {
    setIsModalOpenPinguino(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };

  // Estado para manejar el ítem arrastrado
  const [droppedItem, setDroppedItem] = useState(null);

  // Estado para manejar la verificación del resultado
  const [isCorrect, setIsCorrect] = useState(null);

  // Estado para manejar la visibilidad del botón 'Siguiente'
  const [showNextButton, setShowNextButton] = useState(false);

  // Función para manejar el evento de arrastrar
  const handleDragStart = (e, option) => {
    e.dataTransfer.setData("text/plain", option);
  };

  // Función para manejar el evento de soltar
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    setDroppedItem(data);
  };

  const navigate = useNavigate();
  // Función para verificar si la respuesta es correcta
  const handleVerify = () => {
    if (droppedItem === "=") {
      setIsCorrect(true);
      setShowNextButton(true);
    } else {
      setIsCorrect(false);
    }
  };

  // Función para manejar el clic en el botón 'Siguiente'
  const handleNext = () => {
    navigate("/enunciado31"); // Redirige al siguiente ejercicio
  };

  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };

  // Función para redirigir a la página de insignias
  const handleInsigniaClick = () => {
    navigate("/insignias");
  };

  const handlePythonIconClick = () => {
    console.log("Botón de Python clickeado");
    setIsModalOpenPinguino((prevState) => !prevState);
  };

  return (
    <div className="nivel1-page">
      <Sidebar />
      <div className="nivel1-container">
        <div className="content">
          <div className="white-background">
            <div className="header">
              <div className="icons-container">
                {[
                  { src: "tres.png", name: "Insignia 1" },
                  { src: "bombillo.png", name: "Insignia 2" },
                  { src: "megafono.png", name: "Insignia 3" },
                  { src: "cohetee.png", name: "Insignia 4" },
                  { src: "accion.png", name: "Insignia 6" },
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
                {isModalOpenPinguino && <PinguinoModal onClick={handlePythonIconClick} />}
                <button className="icon-button-mapa" onClick={openModal}>
                  <img src="colombia.png" alt="Icono Mapa" className="info-icon" />
                </button>
                {isModalOpen && (
                  <div className="modal-mapa">
                    <div className="modal-content-mapa">
                      <h2 style={{ textAlign: "center" }}>Mapa</h2>
                      <button className="close-button" onClick={closeModal}>Cerrar</button>
                      <Mapa />
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
                  En este ejercicio, debes identificar el signo correcto para
                  completar el siguiente código y hacer que se imprima un mensaje con las variables.
                </p>
                <div className="code-box">
                  <div className="code-header">Python</div>
                  <div className="code-content">
                    <pre>
                      <code>
                        variable1 ___ "Hola mundo"{"\n"}
                        variable2 ___ 100{"\n"}
                        Print(variable1, variable2)
                      </code>
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
                    ? `("${droppedItem}")`
                    : "Arrastra aquí el signo correcto"}
                </div>
                <div className="button-container">
                  <button className="nivel1-card-button" onClick={handleVerify}>
                    Verificar
                  </button>
                  {showNextButton && (
                    <button
                      className="nivel1-card-button next-button show"
                      onClick={handleNext}
                    >
                      Siguiente
                    </button>
                  )}
                </div>
                <div className="result-container">
                  {isCorrect !== null && (
                    <p
                      className={`result ${isCorrect ? "correct" : "incorrect"}`}
                    >
                      {isCorrect ? "¡Correcto!" : "Inténtalo de nuevo"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treinta;
