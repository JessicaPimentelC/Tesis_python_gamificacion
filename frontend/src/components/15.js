import React, { useState, useEffect } from 'react';
import '../styles/15.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Quince = () => {
  const [centimetros, setCentimetros] = useState('');
  const [printFunction, setPrintFunction] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Estado para la hora y fecha actual
  const navigate = useNavigate(); // Hook para la redirección

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

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/enunciado14')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
      </div>
      <div className="content">
        <div className="info-container">
          <div className="info-item">
            <h3>
              <img src="jugador.png" alt="Icono Nombre" className="info-icon" /> Nombre:
            </h3>
            <p>Eduardo Jose Daza</p>
          </div>
          <div className="info-item">
            <h3>
              <img src="puntaje.png" alt="Icono Puntaje" className="info-icon" /> Puntaje:
            </h3>
            <p>{score}</p>
          </div>
          <div className="info-item">
            <h3>
              <img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:
            </h3>
            <div className="icons-container">
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="fugaz.gif" alt="Insignia 1" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="ganar.gif" alt="Insignia 2" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="gps.gif" alt="Insignia 3" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="caja.gif" alt="Insignia 4" />
              </button>
              <button className="circular-icon" onClick={handleInsigniaClick}>
                <img src="medalla.gif" alt="Insignia 5" />
              </button>
            </div>
          </div>
          <div className="info-item">
            <h3>
              <img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" /> Hora y Fecha:
            </h3>
            <p>{currentTime}</p>
          </div>
        </div>
        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="python1.png" alt="Icono Nivel" />
            </button>
            <div className="header-title">
              <h2>EJERCICIO #15</h2>
            </div>
            <div className="header-status">
              <span></span>
              <button className="icon-button">
                <img src="informacion.png" alt="Icono Moneda" />
              </button>
              <button className="icon-button" onClick={() => navigate('/dashboard')}>
                <img src="ubicacion.png" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
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
    </div>
  );
};

export default Quince;
