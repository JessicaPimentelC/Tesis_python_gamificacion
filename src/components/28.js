import React, { useState } from "react";
import "../styles/28.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Veintiocho = () => {
  const [primerNum, setPrimerNum] = useState(""); // Primer número
  const [segundoNum, setSegundoNum] = useState(""); // Segundo número
  const [output, setOutput] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado de puntuación
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Control del modal
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado de hover para insignias
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const checkAnswer = () => {
    if (selectedAnswer === "numero") {
      const numero = 16; // ejemplo
      const raiz = Math.sqrt(numero);
      setOutput("Respuesta correcta: La raíz cuadrada es: " + raiz);
      setShowNext(true);
    } else {
      setOutput("Respuesta incorrecta. Inténtalo de nuevo.");
      setShowNext(false);
    }
  };

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

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

  const calculateAverage = () => {
    const num1 = parseFloat(primerNum);
    const num2 = parseFloat(segundoNum);
    const average = (num1 + num2) / 2;

    if (!isNaN(average)) {
      setOutput(`El promedio de los números es: ${average}`);
      setScore(score + 10); // Incrementa la puntuación si la respuesta es correcta
    } else {
      setOutput("Inténtalo de nuevo.");
    }
    setShowNext(true); // Mostrar el botón "Finalizar"
  };

  return (
    <div className="level21-page">
      <Sidebar />
      <div className="level21-container">
        <div className="content">
          <div className="white-background">
            <div className="header">
              <div className="icons-container">
                {/* Renderiza insignias */}
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
                <span>Cálculo de la Raíz Cuadrada</span>
              </div>
              <div className="nivel1-card-body">
                <p>
                  ¿Cuál es la palabra que falta para que el código calcule
                  correctamente la raíz cuadrada de un número?
                </p>

                <div className="code-box">
                  <div className="code-header">Python</div>
                  <pre>
              import math {"\n"}
              _______ = int(input("numero:")) {"\n"}
              raiz = math.sqrt(_______) {"\n"}
              print("La raíz cuadrada es:", raiz){"\n"}
            </pre>
                </div>

                {/* Opciones de respuesta */}
        <div className="options">
          {["numero", "valor", "input", "variable"].map((option) => (
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
                    className="level21-card-button"
                    onClick={() => navigate("/examen")}
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
              completar los ejercicios.
            </p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Veintiocho;
