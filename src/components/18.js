import React, { useState } from 'react';
import '../styles/18.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Dieciocho = () => {
  const [areaInput, setAreaInput] = useState('');
  const [printInput, setPrintInput] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0); // Estado para el puntaje
  const navigate = useNavigate(); // Hook para la redirección

  const checkAnswer = () => {
    // Lógica del ejercicio: verifica si los campos tienen los valores correctos
    const correctAreaInput = 'lado ** 2';
    const correctPrintInput = 'print';

    if (areaInput.trim() === correctAreaInput && printInput.trim() === correctPrintInput) {
      setOutput('El área del cuadrado es: 25'); // Asumiendo que el lado es 5 en este ejemplo
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
        <button className="sidebar-button" onClick={() => navigate('/enunciado17')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
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
              <h2>EJERCICIO #18</h2>
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
              <span>Ejercicio de Cálculo del Área del Cuadrado</span>
              <p>Completa el código para calcular el área del cuadrado. Usa los campos de entrada para ingresar las respuestas:</p>
              <ul>
                <li>Para calcular el área, escribe `lado ** 2` en el primer campo.</li>
                <li>Para imprimir el resultado, escribe `print` en el segundo campo.</li>
              </ul>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    lado = float(input("Ingresa la longitud del lado del cuadrado: "))<br />
                    <input
                      type="text"
                      value={areaInput}
                      onChange={(e) => setAreaInput(e.target.value)}
                      placeholder="lado ** 2"
                      style={{ width: '150px', marginRight: '5px' }}
                    />
                    <br />
                    <input
                      type="text"
                      value={printInput}
                      onChange={(e) => setPrintInput(e.target.value)}
                      placeholder="print"
                      style={{ width: '100px', marginRight: '5px' }}
                    />
                    ("El área del cuadrado es:", area)
                  </pre>
                </div>
              </div>

              <button className="nivel1-card-button" onClick={checkAnswer}>
                Verificar
              </button>
              {showNext && (
                <button
                  className="nivel1-card-button"
                  onClick={() => navigate('/enunciado19')} // Ajusta la ruta según sea necesario
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

export default Dieciocho;
