import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/16.css'; // Asegúrate de que la ruta sea correcta

const Dieciséis = () => {
  const [importAnswer, setImportAnswer] = useState('');
  const [printAnswer, setPrintAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Estado para la hora y fecha actual
  const navigate = useNavigate();

  useEffect(() => {
    // Actualiza la hora y fecha cada minuto
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckAnswers = () => {
    if (importAnswer === 'import' && printAnswer === 'print') {
      setIsCorrect(true);
      setShowNext(true); // Mostrar el botón Siguiente si la respuesta es correcta
    } else {
      setIsCorrect(false);
      setShowNext(false); // Ocultar el botón Siguiente si la respuesta es incorrecta
    }
    setShowResult(true);
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/previous-route')}>
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
              <button className="circular-icon" onClick={() => navigate('/insignia1')}>
                <img src="fugaz.gif" alt="Insignia 1" />
              </button>
              <button className="circular-icon" onClick={() => navigate('/insignia2')}>
                <img src="ganar.gif" alt="Insignia 2" />
              </button>
              <button className="circular-icon" onClick={() => navigate('/insignia3')}>
                <img src="gps.gif" alt="Insignia 3" />
              </button>
              <button className="circular-icon" onClick={() => navigate('/insignia4')}>
                <img src="caja.gif" alt="Insignia 4" />
              </button>
              <button className="circular-icon" onClick={() => navigate('/insignia5')}>
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
              <h2>NIVEL 1</h2>
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
              <span>Cálculo de Edad</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                Completa el código para calcular la edad en Python rellenando los espacios en blanco.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                    {'from datetime '}
                    <input
                      type="text"
                      value={importAnswer}
                      onChange={(e) => setImportAnswer(e.target.value)}
                      placeholder="______"
                      className="input-field"
                    />
                    {' datetime\n\nano_nacimiento = int(input("Ingresa tu año de nacimiento: "))\nano_actual = datetime.now().year\nedad = ano_actual - ano_nacimiento\n'}
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
                <button className="nivel1-card-button" onClick={handleCheckAnswers}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado17')} // Redirige a Enunciado17.js
                  >
                    Siguiente
                  </button>
                )}
              </div>

              {showResult && (
                <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? '¡Correcto! 🎉' : 'Inténtalo de nuevo. 😕'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dieciséis;