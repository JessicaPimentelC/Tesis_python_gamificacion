import React, { useState, useEffect } from 'react';
import '../styles/15.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Quince = () => {
  const [centimetros, setCentimetros] = useState('');
  const [printFunction, setPrintFunction] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Estado para la hora y fecha actual
  const navigate = useNavigate(); // Hook para la redirección
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover

  useEffect(() => {
    // Actualiza la hora y fecha cada minuto
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const checkAnswer = () => {
    // Lógica del ejercicio: convierte centímetros a metros
    const centimetrosValue = parseFloat(centimetros);

    // Validar que el valor ingresado en centímetros sea un número válido
    if (isNaN(centimetrosValue) || centimetrosValue === '') {
      setOutput('1.0');
      return;
    }

    // Realizar la conversión de centímetros a metros
    const correctMeters = centimetrosValue / 100;

    // Verifica si los campos son correctos
    if (
      printFunction.trim() === 'print' && // Verificar que se haya ingresado 'print'
      centimetrosValue === 100 // Verificar que el valor de centímetros es 100
    ) {
      setOutput(`¡Correcto! La conversión es: ${correctMeters} metros`);
      setScore(score + 10); // Incrementa el puntaje si la respuesta es correcta
      setShowNext(true); // Muestra el botón de siguiente
    } else {
      setOutput('Inténtalo de nuevo. Asegúrate de que la función y el valor son correctos.');
    }
  };

  const handleInsigniaClick = (e) => {
    const insignia = e.target.alt; // Obtén el nombre de la insignia
    navigate(`/${insignia}`); // Redirige basado en el nombre de la insignia
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
              <span>Ejercicio de Conversión de Unidades</span>
              <p>Llena los espacios en blanco para completar el código que convierte centímetros a metros.</p>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    centimetros = <input
                      type="text"
                      value={centimetros}
                      onChange={(e) => setCentimetros(e.target.value)}
                      placeholder="centímetros"
                    />
                    <br />
                    metros = centimetros / 100<br />
                    <input
                      type="text"
                      value={printFunction}
                      onChange={(e) => setPrintFunction(e.target.value)}
                      placeholder="print"
                    />
                    (metros)
                  </pre>
                </div>
              </div>

              <button className="nivel1-card-button" onClick={checkAnswer}>
                Verificar
              </button>
              {showNext && (
                <button
                  className="nivel1-card-button"
                  onClick={() => navigate('/enunciado16')} // Ajusta la ruta según sea necesario
                >
                  Siguiente
                </button>
              )}

              {/* Mostrar el resultado aquí */}
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
    
  );
};

export default Quince;
