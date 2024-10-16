import React, { useState } from 'react';
import '../styles/7.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Siete = ({ toggleView }) => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [output, setOutput] = useState('');
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime] = useState(new Date().toLocaleString()); // Hora y Fecha actual
  const navigate = useNavigate(); // Hook para la redirección
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover

  const checkAnswer = () => {
    // Compara si el número ingresado es 45.78
    if (parseFloat(inputValue) === 45.78) {
      setResult('correct');
      setShowNext(true); // Muestra el botón "Siguiente"
      setOutput(inputValue); // Muestra el valor ingresado en la salida
      setScore(score + 10); // Incrementa el puntaje cuando sea correcto
    } else {
      setResult('incorrect');
      setShowNext(false); // Oculta el botón "Siguiente"
      setOutput(''); // Limpia la salida si la respuesta es incorrecta
    }
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
              <p>Crea un algoritmo que permita ingresar un número con decimales = 45.78</p>
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    decimal = float(input(
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="code-input-inline"
                        placeholder="Ingrese el número"
                      />
                    ))
                  </pre>
                </div>
              </div>

              {result === 'correct' && (
                <div className="code-box">
                  <div className="code-header">SALIDA</div>
                  <input
                    type="text"
                    value={output}
                    className="code-input"
                    readOnly
                  />
                </div>
              )}

              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado8')} // Ajusta el número de vista siguiente si es necesario
                  >
                    Siguiente
                  </button>
                )}
              </div>
              {result && (
                <div className={`result ${result}`}>
                  {result === 'correct' ? 'Correcto' : 'Inténtalo de nuevo'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siete;
