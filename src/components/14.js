import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/14.css'; // Asegúrate de que la ruta sea correcta
import Sidebar from './Sidebar';


const Catorce = () => {
  const [num1Function, setNum1Function] = useState('');
  const [num2Function, setNum2Function] = useState('');
  const [operator, setOperator] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [insignias, setInsignias] = useState(0); // Estado para las insignias
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate(); // Hook para la redirección
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover

  // Función para actualizar la hora y fecha
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleString()); // Ajusta el formato según tus necesidades
  };
  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };

  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };
  
  // Actualiza la hora y fecha al cargar el componente
  useEffect(() => {
    updateTime();

    // Actualiza la hora y fecha cada minuto
    const intervalId = setInterval(updateTime, 60000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  const checkAnswer = () => {
    if (num1Function === 'float' && num2Function === 'float' && operator === '*') {
      setOutput('¡Correcto! La multiplicación es: ' + (parseFloat(prompt("Ingresa el primer número: ")) * parseFloat(prompt("Ingresa el segundo número: "))));
      setScore(score + 10); // Incrementa el puntaje si la respuesta es correcta
    } else {
      setOutput('Inténtalo de nuevo.');
    }
    setShowNext(true); // Muestra el botón de siguiente
  };

  const handleInsigniaClick = () => {
    navigate('/insignias'); // Redirige a la ruta del módulo de insignias
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
              <span>Ejercicio de Multiplicación Rápida</span>
            </div>
            <div className="nivel1-card-body">
              <p>Llena los espacios en blanco para completar el código que realiza una multiplicación básica en Python.</p>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    num1 = {' '}
                    <input
                      type="text"
                      value={num1Function}
                      onChange={(e) => setNum1Function(e.target.value)}
                      placeholder="function"
                    />
                    (input("Ingresa el primer número: "))<br />
                    num2 = {' '}
                    <input
                      type="text"
                      value={num2Function}
                      onChange={(e) => setNum2Function(e.target.value)}
                      placeholder="function"
                    />
                    (input("Ingresa el segundo número: "))<br />
                    print("La multiplicación es:", num1 {' '}
                    <input
                      type="text"
                      value={operator}
                      onChange={(e) => setOperator(e.target.value)}
                      placeholder="operator"
                    />
                    num2)
                  </pre>
                </div>
              </div>

              <button className="nivel1-card-button" onClick={checkAnswer}>
                Verificar
              </button>
              {showNext && (
                <button
                  className="nivel1-card-button"
                  onClick={() => navigate('/enunciado15')} // Ajusta la ruta según sea necesario
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
  );
};

export default Catorce;
