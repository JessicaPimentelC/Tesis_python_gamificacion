import React, { useState } from "react";
import "../styles/21.css"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Veintiuno = () => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [output, setOutput] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Score state
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Modal control
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Hover state for badges

  const handleInsigniaClick = () => {
    navigate("/insignias");
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name);
  };
  const handleMouseLeave = () => {};

  const calculateArea = () => {
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);
    const area = baseValue * heightValue;

    if (!isNaN(area) && area > 0) {
      setOutput(`El área del rectángulo es: ${area}`);
      setScore(score + 10); // Increment score if answer is correct
    } else {
      setOutput("Inténtalo de nuevo.");
    }
    setShowNext(true); // Show "Finalizar" button
  };

  return (
    <div className="level21-page">
      <Sidebar></Sidebar>
      <div className="level21-container">
        <div className="content">
          <div className="white-background">
            <div className="header">
              <div className="icons-container">
                {/* Render badges */}
                {[
                  { src: "tres.png", name: "Insignia 1" },
                  { src: "bombillo.png", name: "Insignia 2" },
                  { src: "megafono.png", name: "Insignia 3" },
                  { src: "cohetee.png", name: "Insignia 4" },
                  { src: "accion.png", name: "Insignia 6" },
                  { src: "25.png", name: "Insignia 7" },
                  { src: "26.png", name: "Insignia 8" },
                  { src: "22.png", name: "Insignia 9" },
                  { src: "23.png", name: "Insignia 10" },
                  { src: "24.png", name: "Insignia 5" },
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
                <button className="icon-button">
                  <img src="informacion.png" alt="Icono Moneda" />
                </button>
                <button
                  className="icon-button"
                  onClick={() => navigate("/dashboard")}
                >
                  <img src="colombia.png" alt="Icono Pregunta" />
                </button>
                <button className="icon-button">
                  <img src="persona.png" alt="Icono Perfil" />
                </button>
              </div>
            </div>
            <div className="level21-card">
            <div className="nivel1-card-header">
                <span>Ejercicio de Cálculo de Área</span>
                <p>Ingresa la base y la altura del rectángulo para calcular su área.</p>
              </div>
              <div className="level21-card-body">
                <div className="code-box">
                  <div className="code-header">PYTHON</div>
                  <div className="code-content">
                    <pre>
                      base = float(input("Ingresa la base del rectángulo: ")){"\n"}
                      altura = float(input("Ingresa la altura del rectángulo: ")){"\n"}
                      area = base * altura{"\n"}
                      print("El área del rectángulo es", area)
                    </pre>
                  </div>
                </div>

                <div className="input-container">
                  <input
                    type="text"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    placeholder="Ingrese la base"
                  />
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Ingrese la altura"
                  />
                </div>

                <button className="level21-card-button" onClick={calculateArea}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="level21-card-button"
                    onClick={() => navigate("/enunciado22")}
                  >
                    Finalizar
                  </button>
                )}

                {output && (
                  <div className="code-box">
                    <div className="code-header">SALIDA</div>
                    <pre>{output}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>¡Hola, soy pingui jessica!</h2>
            <p>
              Aquí podrás encontrar todas las ayudas que necesites para completar los ejercicios.
            </p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Veintiuno;
