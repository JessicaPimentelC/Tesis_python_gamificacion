import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/enunciado13.css'; // Asegúrate de que la ruta sea correcta

const Trece = ({ toggleView }) => {
  const [num1Function, setNum1Function] = useState('');
  const [num2Function, setNum2Function] = useState('');
  const [operator, setOperator] = useState('');
  const [output, setOutput] = useState('');
  const [showContinue, setShowContinue] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const navigate = useNavigate(); // Hook para la redirección

  const checkAnswer = () => {
    if (num1Function === 'float' && num2Function === 'float' && operator === '+') {
      setOutput(`¡Correcto! La suma es: ${parseFloat(prompt("Ingresa el primer número: ")) + parseFloat(prompt("Ingresa el segundo número: "))}`);
      setScore(score + 10); // Incrementa el puntaje si la respuesta es correcta
    } else {
      setOutput('Inténtalo de nuevo.');
    }
    setShowContinue(true); // Muestra el botón de continuar
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => toggleView('12')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => toggleView('configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
        <div className="score">
          <img src="puntaje.png" alt="Icono Puntaje" className="score-icon" />
          <p className="score-text">Puntaje: {score}</p>
        </div>
      </div>
      <div className="content">
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
              <button className="icon-button" onClick={() => toggleView('dashboard')}>
                <img src="ubicacion.png" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
              </button>
            </div>
          </div>
          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>Suma Básica</span>
              <p>Llena los espacios en blanco para completar el código que realiza una suma básica en Python.</p>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">Python</div>
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
                    print("La suma es:", num1 {' '}
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
              {showContinue && (
                <button
                  className="nivel1-card-button"
                  onClick={() => navigate('/enunciado14')} // Ajusta la ruta según sea necesario
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

export default Trece;
