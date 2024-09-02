import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/enunciado19.css'; // Asegúrate de que la ruta sea correcta

const Diecinueve = () => {
  const [celsiusInput, setCelsiusInput] = useState('');
  const [printInput, setPrintInput] = useState('');
  const [output, setOutput] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Hook para la redirección
  const audioRef = useRef(null); // Referencia al elemento de audio

  const checkAnswer = () => {
    const correctPrintInput = 'print';

    if (printInput.trim() === correctPrintInput) {
      const celsius = parseFloat(celsiusInput);
      const fahrenheit = (celsius * 9 / 5) + 32;
      setOutput(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}`);
      setShowNext(true);
    } else {
      setOutput('Inténtalo de nuevo.');
    }
  };

  const handleShowModal = () => {
    setShowModal(true); // Muestra el modal
    if (audioRef.current) {
      audioRef.current.play(); // Reproduce el sonido cuando se muestra el modal
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/examen'); // Redirige al módulo Examen después de cerrar el modal
  };

  return (
    <div className="nivel1-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />
        <button className="sidebar-button" onClick={() => navigate('/enunciado18')}>
          <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
          Atrás
        </button>
        <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          CONFIGURACIÓN
        </button>
      </div>
      <div className="content">
        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="python1.png" alt="Icono Nivel" />
            </button>
            <div className="header-title">
              <h2>Nivel 1</h2>
            </div>
            <div className="header-status">
              <span></span>
              <button className="icon-button">
                <img src="informacion.png" alt="Icono Información" />
              </button>
              <button className="icon-button" onClick={() => navigate('/dashboard')}>
                <img src="ubicacion.png" alt="Icono Dashboard" />
              </button>
              <button className="icon-button">
                <img src="AYUDA.jpeg" alt="Icono Ayuda" />
              </button>
            </div>
          </div>
          <div className="nivel1-card">
            <div className="nivel1-card-header">
              <span>Conversión de Temperatura</span>
              <p>En este ejercicio, debes completar el código para convertir una temperatura de grados Celsius a Fahrenheit. Completa el campo con la función correcta para imprimir el resultado.</p>
            </div>
            <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">PYTHON</div>
                <div className="code-content">
                  <pre>
                    celsius = float(input("Ingresa la temperatura en grados Celsius: "))<br />
                    fahrenheit = (celsius * 9/5) + 32<br />
                    <input
                      type="text"
                      value={printInput}
                      onChange={(e) => setPrintInput(e.target.value)}
                      placeholder="print"
                      style={{ width: '100px', marginRight: '5px' }}
                    />
                    ("La temperatura en Fahrenheit es:", fahrenheit)
                  </pre>
                </div>
              </div>

              <input
                type="number"
                value={celsiusInput}
                onChange={(e) => setCelsiusInput(e.target.value)}
                placeholder="Ingresa grados Celsius"
                style={{ width: '250px', marginTop: '10px' }}
              />

              <button className="nivel1-card-button" onClick={checkAnswer}>
                Verificar
              </button>
              {showNext && (
                <button
                  className="nivel1-card-button"
                  onClick={handleShowModal} // Llama a la función que muestra el modal y reproduce el sonido
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

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¡Bien hecho!</h2>
            <p>¡Excelente! Ahora que has completado este ejercicio, estás listo para pasar al siguiente. ¡Vamos al examen y demostremos lo que aprendimos!</p>
            <img src="Ntx5.gif" alt="GIF de bienvenida" className="modal-gif" />
            <button className="modal-close-button" onClick={handleCloseModal}>
              Continuar al Examen
            </button>
          </div>
        </div>
      )}

      {/* Audio */}
      <audio ref={audioRef} src="examen.mp3" />
    </div>
  );
};

export default Diecinueve;
