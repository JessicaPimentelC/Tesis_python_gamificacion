import React, { useState, useEffect } from 'react';
import '../styles/4.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Cuatro = () => {
  const [droppedWords, setDroppedWords] = useState([]);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover
  

  useEffect(() => {
    const now = new Date();
    const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.toLocaleDateString()}`;
    setCurrentTime(formattedTime);
  }, []);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (!droppedWords.includes(data)) {
      setDroppedWords([...droppedWords, data]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkAnswer = () => {
    if (droppedWords.includes('print')) {
      setScore(score + 10);
      setShowNext(true);
      setErrorMessage("");
      setSuccessMessage("¡Correcto!"); // Mostrar mensaje de éxito
    } else {
      setErrorMessage('Inténtalo de nuevo');
      setShowNext(false);
      setSuccessMessage(""); // Limpiar mensaje de éxito
    }
  };

  const handleInsigniaClick = () => {
    navigate('/insignias');
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };
  return (
    <div className="nivel1-container">
     <Sidebar></Sidebar>
      <div className="content">
        {/* Contenedor de información */}
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
                    {hoveredInsignia === insignia.name && <p className="hovered-insignia">{insignia.name}</p>}
                </div>
                ))}
            </div>
              {/*aquui es donde van la insignias*/}
             
              
            </div>
            <div className="header-title">
                <h2>NIVEL 1</h2>
                <div className="header-status">
                <span></span>
                <button className="icon-button">
                  <img src="informacion.png" alt="Icono Moneda" />
                </button>
                <button className="icon-button" onClick={() => navigate('/dashboard')}>
                  <img src="colombia.png" alt="Icono Pregunta" />
                </button>
                <button className="icon-button">
                  <img src="persona.png" alt="Icono Perfil" />
                </button>
                
              </div>
            
              </div>
          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>Ejercicio de Programación</span>
            </div>
            <div className="nivel1-card-body">
              <p>Arrastra la palabra <strong>`print`</strong> al cuadro de código y verifica tu respuesta.</p>
            </div>
            <div className="nivel1-card-body">
              <div
                className="code-box"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="code-header">Código:</div>
                <div className="code-content">
                  {droppedWords.includes('print') ? 'print("70 / 2")' : '______("70 / 2")'}
                </div>
              </div>

              <div className="draggable-words">
                <div
                  id="print"
                  className="draggable-word"
                  draggable
                  onDragStart={handleDragStart}
                >
                  print
                </div>
                <div
                  id="else"
                  className="draggable-word"
                  draggable
                  onDragStart={handleDragStart}
                >
                  else
                </div>
                <div
                  id="customWord"
                  className="draggable-word"
                  draggable
                  onDragStart={handleDragStart}
                >
                  While
                </div>
              </div>

              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado5')}
                  >
                    Siguiente
                  </button>
                )}
              </div>

              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="success-message">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuatro;
