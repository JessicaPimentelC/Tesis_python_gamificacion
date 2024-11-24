import React, { useState } from "react";
import "../styles/40.css"; // Ruta de los estilos
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PinguinoModal from "./PinguinoModal";
import Mapa from "./Mapa";

const Cuarentauno = () => {
  const [flippedCards, setFlippedCards] = useState([]); // Tarjetas volteadas
  const [matchedPairs, setMatchedPairs] = useState([]); // Pairs emparejados
  const [isCorrect, setIsCorrect] = useState(null); // Estado para verificar si es correcto
  const navigate = useNavigate();
  const [hoveredInsignia, setHoveredInsignia] = useState(null);
  const [isModalOpenPinguino, setIsModalOpenPinguino] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    { id: 1, value: "float", pairId: 1 },
    { id: 2, value: "float", pairId: 2 },
    { id: 3, value: "print", pairId: 3 },
    { id: 4, value: "print", pairId: 3 },
    { id: 5, value: "if", pairId: 2 },
    { id: 6, value: "if", pairId: 1 }, // Par para el "="
  ];

  const handleCardClick = (card) => {
    if (flippedCards.length === 2) return;

    if (flippedCards.find((flippedCard) => flippedCard.id === card.id)) return;

    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      const firstCard = flippedCards[0];
      if (firstCard.pairId === card.pairId) {
        setMatchedPairs([...matchedPairs, firstCard.id, card.id]);
        setFlippedCards([]); // Restablecer las cartas volteadas
        if (card.value === "=") {
          // Verifica si el signo es "="
          setIsCorrect(true);
        }
      } else {
        // Si las cartas no coinciden, voltear de nuevo después de un corto retraso
        setTimeout(() => setFlippedCards([]), 1000); // Esperar 1 segundo para voltear las cartas
      }
    }
  };

  const isCardFlipped = (card) => {
    return (
      flippedCards.find((flippedCard) => flippedCard.id === card.id) ||
      matchedPairs.includes(card.id)
    );
  };

  const handleNext = () => {
    if (isCorrect) {
      navigate("/enunciado42"); // Cambia "/otro-modulo" a la ruta deseada
    }
  };

  const handleInsigniaClick = () => {
    navigate("/insignias");
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name);
  };

  const handleMouseLeave = () => {
    setHoveredInsignia(null);
  };
  const handlePythonIconClick = () => {
    setIsModalOpenPinguino((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false); // Cerrar el modal
  };

  const handleVerify = () => {
    if (matchedPairs.includes(3)) {
      // Si el signo "=" está emparejado correctamente
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
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
                <span>EJERCICIO CONCATENACION DE CADENAS</span>
              </div>
              <div className="nivel1-card-body-ejer1">
                <p>
                Encuentra la pareja relacionada con el cálculo del promedio en Python para que el ejerccio sea el correcto .
                </p>
                <div className="code-box">
                  <div className="code-header">Python</div>
                  <div className="code-content">
                    <pre>
                      <code>
                        cadena1 = input(“hola”) {"\n"}
                        cadena2 = input(“mundo”) {"\n"}
                        _______(cadena1, cadena2){"\n"}
                        
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="card-grid">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className={`card ${isCardFlipped(card) ? "flipped" : ""}`}
                      onClick={() => handleCardClick(card)}
                    >
                      {isCardFlipped(card) ? (
                        <span>{card.value}</span>
                      ) : (
                        <span>?</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="verify-container">
                  {isCorrect === true && (
                    <p className="result correct">¡Correcto! El signo es "="</p>
                  )}
                  {isCorrect === false && (
                    <p className="incorrect-message">¡Inténtalo de nuevo!</p>
                  )}
                  <button className="next-button" onClick={handleVerify}>
                    Verificar
                  </button>
                  <button
                    className={`nivel1-card-button next-button ${
                      isCorrect ? "show" : ""
                    }`}
                    onClick={handleNext}
                    disabled={isCorrect === null || !isCorrect} // Desactiva el botón hasta que sea correcto
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuarentauno;
