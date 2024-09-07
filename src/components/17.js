import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/17.css'; // Asegúrate de que la ruta sea correcta

const Diecisiete = () => {
  const [elifAnswer, setElifAnswer] = useState('');
  const [elseAnswer, setElseAnswer] = useState('');
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
    // Compara las respuestas ingresadas con los valores correctos
    const isElifCorrect = elifAnswer.trim() === 'elif';
    const isElseCorrect = elseAnswer.trim() === 'else';

    if (isElifCorrect && isElseCorrect) {
      setIsCorrect(true);
      setShowNext(true); // Muestra el botón Siguiente si la respuesta es correcta
    } else {
      setIsCorrect(false);
      setShowNext(false); // Oculta el botón Siguiente si la respuesta es incorrecta
    }
    setShowResult(true);
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/enunciado16')}>
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
            <p>0</p>
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
              <h2>EJERCICIO #17</h2>
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
              <span>Verificación de Números</span>
            </div>
            <div className="nivel1-card-body">
              <p>
                Completa el código para verificar si un número es positivo, negativo o cero. Rellena los espacios en blanco.
              </p>
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <pre className="code-content">
                  <code>
                    {'numero = float(input("Ingresa un número: "))\n'}
                    {'if numero > 0:\n'}
                    {'    print("El número es positivo")\n'}
                    {' '}
                    <input
                      type="text"
                      value={elifAnswer}
                      onChange={(e) => setElifAnswer(e.target.value)}
                      placeholder="______"
                      className="input-field"
                    />
                    {'\n'}
                    {'    print("El número es negativo")\n'}
                    {' '}
                    <input
                      type="text"
                      value={elseAnswer}
                      onChange={(e) => setElseAnswer(e.target.value)}
                      placeholder="______"
                      className="input-field"
                    />
                    {'\n'}
                    {'    print("El número es cero")\n'}
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
                    onClick={() => navigate('/enunciado18')} // Redirige a Enunciado18.js
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

export default Diecisiete;
