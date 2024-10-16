import React, { useState, useEffect } from 'react';
import '../styles/10.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Diez = ({ toggleView }) => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate(); // Hook para la redirección
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString()); // Ajusta el formato según tus necesidades
    };

    // Actualiza la hora y fecha al cargar el componente
    updateTime();

    // Actualiza la hora y fecha cada minuto
    const intervalId = setInterval(updateTime, 60000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  const checkAnswer = () => {
    setOutput(inputValue);
    setShowNext(true);
    setScore(score + 10); // Incrementa el puntaje si la respuesta es correcta
  };

  const handleInsigniaClick = () => {
    navigate('/insignias'); // Redirige a la página de insignias
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

      {/* Contenedor de información arriba */}
      <div className="content">
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
              <span>Ejercicio de Entrada de Texto</span>
            </div>
            <div className="nivel1-card-body">
              <p>Ingrese el nombre "EDUARDO" en el campo de abajo y presione "Print".</p>
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    texto = input(<span className="input-text">"Ingrese un texto: "</span>)<br />
                    print(texto)
                  </pre>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ingrese un texto"
                    className="code-input"
                  />
                </div>
              </div>

              <button className="nivel1-card-button" onClick={checkAnswer}>
                Print
              </button>
              {showNext && (
                <button
                  className="nivel1-card-button"
                  onClick={() => navigate('/enunciado11')} // Ajusta el número de vista siguiente si es necesario
                >
                  Siguiente
                </button>
              )}

              {output && (
                <div className="code-box">
                  <div className="code-header">SALIDA</div>
                  <div className="code-content">
                    <pre>{output}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diez;
