import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/16.css"; // Asegúrate de que la ruta sea correcta
import Sidebar from "./Sidebar";

const Dieciséis = () => {
  const [importAnswer, setImportAnswer] = useState("");
  const [printAnswer, setPrintAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Estado para la hora y fecha actual
  const navigate = useNavigate();
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  useEffect(() => {
    // Actualiza la hora y fecha cada minuto
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckAnswers = () => {
    if (importAnswer === "import" && printAnswer === "print") {
      setIsCorrect(true);
      setShowNext(true); // Mostrar el botón Siguiente si la respuesta es correcta
    } else {
      setIsCorrect(false);
      setShowNext(false); // Ocultar el botón Siguiente si la respuesta es incorrecta
    }
    setShowResult(true);
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };
  const handleInsigniaClick = () => {
    navigate("/insignias");
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
                  { src: "25.png", name: "Insignia 7  " },
                  { src: "26.png", name: "Insignia 8  " },
                  { src: "22.png", name: "Insignia 9  " },
                  { src: "23.png", name: "Insignia 10  " },
                  { src: "24.png", name: "Insignia 5  " },
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
            <div className="nivel1-card">
              <div className="nivel1-card-header">
                <span>Cálculo de Edad</span>
              </div>
              <div className="nivel1-card-body">
                <p>
                  Completa el código para calcular la edad en Python rellenando
                  los espacios en blanco.
                </p>
                <div className="code-box">
                  <div className="code-header">Python</div>
                  <pre className="code-content">
                    <code>
                      {"from datetime "}
                      <input
                        type="text"
                        value={importAnswer}
                        onChange={(e) => setImportAnswer(e.target.value)}
                        placeholder="______"
                        className="input-field"
                      />
                      {
                        ' datetime\n\nano_nacimiento = int(input("Ingresa tu año de nacimiento: "))\nano_actual = datetime.now().year\nedad = ano_actual - ano_nacimiento\n'
                      }
                      <input
                        type="text"
                        value={printAnswer}
                        onChange={(e) => setPrintAnswer(e.target.value)}
                        placeholder="______"
                        className="input-field"
                      />
                      {'("Tu edad es:", edad)\n'}
                    </code>
                  </pre>
                </div>

                <div className="nivel1-card-button-container">
                  <button
                    className="nivel1-card-button"
                    onClick={handleCheckAnswers}
                  >
                    Verificar
                  </button>
                  {showNext && (
                    <button
                      className="nivel1-card-button"
                      onClick={() => navigate("/enunciado17")} // Redirige a Enunciado17.js
                    >
                      Siguiente
                    </button>
                  )}
                </div>

                {showResult && (
                  <div
                    className={`result-message ${
                      isCorrect ? "correct" : "incorrect"
                    }`}
                  >
                    {isCorrect ? "¡Correcto! 🎉" : "Inténtalo de nuevo. 😕"}
                  </div>
                )}
              </div>
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

export default Dieciséis;
