import React, { useState, useEffect } from 'react';
import '../styles/3.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Tres = ({ toggleView }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const [currentTime, setCurrentTime] = useState(''); // Estado para la fecha y hora
  const navigate = useNavigate(); // Hook para la redirección

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleString();
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const checkAnswer = () => {
    if (parseInt(num1) === 56 && parseInt(num2) === 3) {
      setResult('correct');
      setShowNext(true); // Muestra el botón "Siguiente"
      setScore(score + 10); // Incrementa el puntaje cuando sea correcto
    } else {
      setResult('incorrect');
      setShowNext(false); // Oculta el botón "Siguiente"
    }
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/enunciado3')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
        <div className="score">
          {/* Aquí podrías añadir más elementos si los necesitas */}
        </div>
      </div>

      {/* Contenedor principal con el cuadro de información y el contenido principal */}
      <div className="content">
        {/* Contenedor de información */}
        <div className="info-container">
          <div className="info-item">
            <h3><img src="jugador.png" alt="Icono Nombre" className="info-icon" /> Nombre:</h3>
            <p>Eduardo Jose Daza</p>
          </div>
          <div className="info-item">
            <h3><img src="puntaje.png" className="info-icon" /> Puntaje:</h3>
            <p>{score}</p>
          </div>
          <div className="info-item">
            <h3><img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:</h3>
            <p>0</p>
          </div>
          <div className="info-item">
            <h3><img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" /> Hora y Fecha:</h3>
            <p>{currentTime}</p>
          </div>
        </div>

        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="python1.png" alt="Icono Nivel" />
            </button>
            <div className="header-title">
              <h2>EJERCICIO #3</h2>
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
              <span>Ejercicio de Programación</span>
              </div>
              <div className="nivel1-card-body">
              <p>Imprima el resultado de 56 multiplicado por 3</p> 
              </div>
            

            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">ENTRADA</div>
                <div className="code-content">
                  <pre>
                    print ( 
                    <input
                      type="number"
                      value={num1}
                      onChange={(e) => setNum1(e.target.value)}
                      className="code-input-inline"
                      placeholder=""
                    />
                    {' '}
                    *{' '}
                    <input
                      type="number"
                      value={num2}
                      onChange={(e) => setNum2(e.target.value)}
                      className="code-input-inline"
                      placeholder=""
                    />
                    )
                  </pre>
                </div>
              </div>
              
              <div className="code-box">
                <div className="code-header">SALIDA</div>
                <input
                  type="number"
                  value={num1 * num2}
                  className="code-input"
                  readOnly
                />
              </div>
              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado4')} // Aquí puedes ajustar el número de vista siguiente
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

export default Tres;
