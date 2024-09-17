import React, { useState } from 'react';
import '../../styles/2.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import ProgresoBar from '../ProgresoBar';


const Dos = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate(); // Hook para la redirección

  const checkAnswer = () => {
    if (input1.trim().toLowerCase() === 'if' && input2.trim().toLowerCase() === 'else') {
      setResult('correct');
      setShowNext(true); // Muestra el botón "Siguiente"
    } else {
      setResult('incorrect');
      setShowNext(false); // Oculta el botón "Siguiente"
    }
  };
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate(`/ej${randomNumber}`)}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atras
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
        <div className="score">
          {/* Aquí podrías añadir más elementos si los necesitas */}
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
              <button className="icon-button" onClick={() => navigate('/dashboard')}>
                <img src="ubicacion.png" alt="Icono Pregunta" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Perfil" />
              </button>
            </div>
          </div>
          <div className="nivel1-card">

            <ProgresoBar/>
            </div>

          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>EJERCICIO #2</span>
            </div>
            <div className="nivel1-card-body">
              <p>
              Completa el siguiente código en Python para que funcione correctamente. El código debe evaluar si un número es mayor o menor que cero y luego imprimir un mensaje apropiado. Usa if y else para completar el código.
              </p>
              <div className="code-box">
                <div className="code-header">Python</div>
                <pre className="code-content">
                  <code>
                    <span>
                      <input
                        type="text"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        className="code-input"
                      />{' '}
                      numero &gt; 0:
                    </span>
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;print("El número es mayor a cero!")</span>
                    <br />
                    <span>
                      <input
                        type="text"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        className="code-input"
                      />{' '}
                      :
                    </span>
                    <br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;print("El número es menor a cero!")</span>
                  </code>
                </pre>
              </div>
              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/ej3')} // Cambiado a '3'
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

export default Dos;
