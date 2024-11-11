import React, { useState } from "react";
import "../styles/20.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Veinte = () => {
  const [output, setOutput] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hoveredInsignia, setHoveredInsignia] = useState(null);
  const navigate = useNavigate();

  const handleInsigniaClick = () => {
    navigate("/insignias");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleMouseEnter = (name) => {
    setHoveredInsignia(name);
  };

  const handleMouseLeave = () => {
    setHoveredInsignia(null);
  };

  const checkAnswer = () => {
    if (selectedAnswer === "print") {
      setOutput("Respuesta correcta: Temperatura en Fahrenheit: 77");
      setScore(score + 10);
      setShowNext(true);
    } else {
      setOutput("Respuesta incorrecta. Inténtalo de nuevo.");
      setShowNext(false); // Asegura que el botón "Siguiente" solo aparezca con la respuesta correcta
    }
  };
  

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
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
                <button className="icon-button">
                  <img src="informacion.png" alt="Icono Información" />
                </button>
                <button
                  className="icon-button"
                  onClick={() => navigate("/dashboard")}
                >
                  <img src="colombia.png" alt="Icono País" />
                </button>
                <button className="icon-button">
                  <img src="persona.png" alt="Icono Perfil" />
                </button>
              </div>
            </div>

            <div className="nivel1-card">
              <div className="nivel1-card-body">
                <span>Ejercicio de Conversión de Temperatura</span>
                <p>¿Cuál es la palabra que falta para que el código imprima?</p>
                <div className="code-box">
                  <div className="code-header">PYTHON</div>
                  <div className="code-content">
                    <pre>
                      celsius = 25{"\n"}
                      fahrenheit = (celsius * 9/5) + 32{"\n"}
                      _____(fahrenheit)
                    </pre>
                  </div>
                </div>

                {/* Opciones de respuesta */}
                <div className="options">
  {["print", "input", "if", "def"].map((option) => (
    <div
      key={option}
      className={`option ${selectedAnswer === option ? "selected" : ""}`}
      onClick={() => handleSelectAnswer(option)}
    >
                      {option}
                    </div>
                  ))}
                </div>

                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate("/enunciado21")}
                  >
                    Siguiente
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
              Aquí podrás encontrar todas las ayudas que necesites para
              completar los ejercicios. ¡No dudes en consultarlo cuando lo
              necesites!
            </p>

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

export default Veinte;
