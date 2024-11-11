import React, { useState } from "react";
import "../styles/21.css"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Veintidos = () => {
  const [metros, setMetros] = useState(""); // Cambiado a metros
  const [output, setOutput] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado de puntuación
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Control del modal
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado de hover para insignias

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

  const convertToKilometers = () => {
    const metrosValue = parseFloat(metros);
    const kilometers = metrosValue / 1000;

    if (!isNaN(kilometers) && metrosValue > 0) {
      setOutput(`El valor en kilómetros es: ${kilometers}`);
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
                <span>Ejercicio de Conversión de Metros a Kilómetros</span>
                <p>Ingresa el valor en metros para calcular su equivalente en kilómetros.</p>
              </div>
              <div className="level21-card-body">
                <div className="code-box">
                  <div className="code-header">PYTHON</div>
                  <div className="code-content">
                    <pre>
                      metros = float(input("Ingresa el valor en metros: ")){"\n"}
                      kilometros = metros / 1000{"\n"}
                      print("El valor en kilómetros es:", kilometros)
                    </pre>
                  </div>
                </div>

                <div className="input-container">
                  <input
                    type="text"
                    value={metros}
                    onChange={(e) => setMetros(e.target.value)}
                    placeholder="Ingrese el valor en metros"
                  />
                </div>

                <button className="level21-card-button" onClick={convertToKilometers}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="level21-card-button"
                    onClick={() => navigate("/enunciado23")}
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
              Aquí podrás encontrar todas las ayudas que necesites para completar los ejercicios.
            </p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Veintidos;
