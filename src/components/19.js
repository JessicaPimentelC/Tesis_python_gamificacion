import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/19.css"; // Asegúrate de que la ruta sea correcta
import Sidebar from "./Sidebar";

const Diecinueve = () => {
  const [celsiusInput, setCelsiusInput] = useState("");
  const [printInput, setPrintInput] = useState("");
  const [output, setOutput] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate(); // Hook para la redirección
  const audioRef = useRef(null); // Referencia al elemento de audio
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  const checkAnswer = () => {
    const correctPrintInput = "print";

    if (printInput.trim() === correctPrintInput) {
      const celsius = parseFloat(celsiusInput);
      const fahrenheit = (celsius * 9) / 5 + 32;
      setOutput(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}`);
      setShowNext(true);
      setScore(score + 10); // Ejemplo: aumenta el puntaje en 10 puntos
    } else {
      setOutput("Inténtalo de nuevo.");
    }
  };

  const handleShowModal = () => {
    setShowModal(true); // Muestra el modal
    if (audioRef.current) {
      audioRef.current.play(); // Reproduce el sonido cuando se muestra el modal
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/examen"); // Redirige al módulo Examen después de cerrar el modal
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
              <div className="nivel1-card-body">
                <span>Conversión de Temperatura</span>
                <p>
                  En este ejercicio, debes completar el código para convertir
                  una temperatura de grados Celsius a Fahrenheit. Completa el
                  campo con la función correcta para imprimir el resultado.
                </p>
              </div>
              <div className="nivel1-card-body">
                <div className="code-box">
                  <div className="code-header">PYTHON</div>
                  <div className="code-content">
                    <pre>
                      celsius = float(input("Ingresa la temperatura en grados
                      Celsius: "))
                      <br />
                      fahrenheit = (celsius * 9/5) + 32
                      <br />
                      <input
                        type="text"
                        value={printInput}
                        onChange={(e) => setPrintInput(e.target.value)}
                        placeholder="print"
                        style={{ width: "100px", marginRight: "5px" }}
                      />
                      ("La temperatura en Fahrenheit es:", fahrenheit)
                    </pre>
                  </div>
                </div>

                <input
                  type="number"
                  value={celsiusInput}
                  onChange={(e) => setCelsiusInput(e.target.value)}
                  placeholder="Ingresa grados Celsius"
                  style={{ width: "250px", marginTop: "10px" }}
                />

                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={handleShowModal} // Llama a la función que muestra el modal y reproduce el sonido
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

export default Diecinueve;
