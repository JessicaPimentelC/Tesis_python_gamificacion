import React, { useState, useEffect } from 'react';
import '../styles/12.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Doce = () => {
  const [inputFunction, setInputFunction] = useState('');
  const [printFunction, setPrintFunction] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate(); // Hook para la redirección

  // Función para actualizar la hora y fecha
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleString()); // Ajusta el formato según tus necesidades
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
    if (inputFunction === 'input' && printFunction === 'print') {
      setOutput(`¡Correcto! Hola, ${inputFunction}`);
      setScore(score + 10); // Incrementa el puntaje si la respuesta es correcta
    } else {
      setOutput('Inténtalo de nuevo.');
    }
    setShowNext(true); // Muestra el botón de siguiente
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/enunciado11')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
       
      </div>
      <div className="content">
        {/* Contenedor de información */}
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
            <p>0</p> {/* Aquí deberías actualizar el puntaje si se usa una variable de estado */}
          </div>
          <div className="info-item">
            <h3>
              <img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:
            </h3>
            <p>0</p> {/* Aquí deberías actualizar el número de insignias si se usa una variable de estado */}
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
              <h2>EJERCICIO #12</h2>
            </div>
            <div className="header-status">
              <span></span>
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
              <span>Completa el código de Python</span>
              </div>
              <div className="nivel1-card-body">
              <p>Llena los espacios en blanco para completar el saludo.</p>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    nombre ={' '}
                    <input
                      type="text"
                      value={inputFunction}
                      onChange={(e) => setInputFunction(e.target.value)}
                      placeholder="function"
                    />
                    ("¿Cómo te llamas?")<br />
                    <input
                      type="text"
                      value={printFunction}
                      onChange={(e) => setPrintFunction(e.target.value)}
                      placeholder="function"
                    />
                    ("Hola, " + nombre)
                  </pre>
                </div>
              </div>

              <button className="nivel1-card-button" onClick={checkAnswer}>
                Verificar
              </button>
              {showNext && (
                <button
                  className="nivel1-card-button"
                  onClick={() => navigate('/enunciado13')} // Ajusta la ruta según sea necesario
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

export default Doce;
