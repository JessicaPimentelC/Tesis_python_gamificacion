import React, { useState } from "react";
import "../styles/28.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PinguinoModal from "./PinguinoModal";
import Mapa from "./Mapa";

const Treintaocho = () => {
  const [options, setOptions] = useState(["If", "math", "import", "float"]);
  const [hoveredInsignia, setHoveredInsignia] = useState(null);
  const [isModalOpenPinguino, setIsModalOpenPinguino] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [droppedItem, setDroppedItem] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  
 
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDragStart = (e, option) => {
    e.dataTransfer.setData("text/plain", option);
  };
  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    setDroppedItem(data);
  };

  const handleVerify = () => {
    if (droppedItem === "math") {
      setIsCorrect(true);
      setShowNextButton(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    navigate("/enunciado39");
  };

  const handleMouseEnter = (name) => {
    setHoveredInsignia(name);
  };

  const handleMouseLeave = () => {
    setHoveredInsignia(null);
  };

  const handleInsigniaClick = () => {
    navigate("/insignias");
  };

  const handlePythonIconClick = () => {
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
                  Completa el código arrastrando la palabra clave <code>math</code> para calcular la hipotenusa del triángulo rectángulo.
                </p>
                <div className="code-box">
                  <div className="code-header">Python</div>
                  <div className="code-content">
                    <pre>
                      <code>
                        import _____ {"\n"}
                        cateto1 = float(input("Ingresa la longitud del primer cateto: ")) {"\n"}
                        cateto2 = float(input("Ingresa la longitud del segundo cateto: ")) {"\n"}
                        hipotenusa = math.sqrt(cateto1**2 + cateto2**2) {"\n"}
                        print("La hipotenusa del triángulo es:", hipotenusa)
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
                    ? `import ${droppedItem}`
                    : "Arrastra aquí la palabra 'math'"}
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

export default Treintaocho;
