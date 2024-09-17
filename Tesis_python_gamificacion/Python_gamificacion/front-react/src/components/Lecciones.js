import React, { useState } from 'react';
import '../styles/Lecciones.css';
import { useNavigate } from 'react-router-dom';

const Lecciones = ({ toggleView }) => {
  const [isLevel1Complete, setIsLevel1Complete] = useState(false); // Estado para controlar si el nivel 1 está completo
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar el cuadro emergente
  const [popupMessage, setPopupMessage] = useState(''); // Estado para el mensaje del cuadro emergente

  const navigate = useNavigate(); // Hook para la redirección

  const handleBackClick = () => {
    navigate(-1); // Navegar a la página anterior
  };

  const handleConfigClick = () => {
    navigate('/configuracion'); // Navegar a la página de configuración
  };

  // Función para mostrar el cuadro emergente
  const showFloatingMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  // Función para cerrar el cuadro emergente
  const closePopup = () => {
    setShowPopup(false);
  };

  // Funciones para manejar los clics en los niveles
  const handleLevel1Click = () => {
    navigate('/nivel1');
    setIsLevel1Complete(true); // Marcar el nivel 1 como completo (esto debería hacerse al completar realmente el nivel)
  };

  const handleLevel2Click = () => {
    if (isLevel1Complete) {
      navigate('/nivel2');
    } else {
      showFloatingMessage('¡Whoa, vaquero! 🤠 Completa el nivel 1 antes de ser el ninja Python.');
    }
  };

  const handleLevel3Click = () => {
    if (isLevel1Complete) {
      navigate('/nivel3');
    } else {
      showFloatingMessage('¡Espera, genio! 🚧 Completa el nivel 2 antes de pasar al nivel 3. ¡Vamos a ello! 🦸‍♂️');
    }
  };

  return (
    <div className="lecciones-container">
      <div className="sidebar">
        <img src="tesis.png" alt="Logo" className="logo" />

        {/* Botón de Atrás */}
        <button className="sidebar-button" onClick={handleBackClick}>
          <img src="flecha.png" alt="Atrás" className="sidebar-icon" />
          Atrás
        </button>

        {/* Botón de Configuración */}
        <button className="sidebar-button" onClick={handleConfigClick}>
          <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
          Configuración
        </button>

        <div className="score">
          {/* Aquí puedes agregar el contenido relacionado con el puntaje si es necesario */}
        </div>
      </div>

      <div className="content">
        <div className="white-background">
          <div className="header">
            <button className="icon-button">
              <img src="bandera.png" alt="Profile" className="profile" />
            </button>
            <button className="icon-button">
              <img src="medalla.png" alt="Notification" className="notification" />
            </button>
            <button className="icon-button">
              <img src="mensaje.png" alt="Help" className="help" />
            </button>
            <button className="icon-button">
              <img src="AYUDA.jpeg" alt="Profile" className="profile" />
            </button>
          </div>
          <h1>BIENVENIDOS AL CURSO DE LENGUAJE DE PROGRAMACION PYTHON</h1>
          <div className="levels">
            <button className="level-button nivel-1" onClick={handleLevel1Click}>
              <img src="python1.png" alt="Level 1" />
              <span>NIVEL 1</span>
            </button>
            <button className="level-button nivel-2" onClick={handleLevel2Click}>
              <img src="py.png" alt="Level 2" />
              <span>NIVEL 2</span>
            </button>
            <button className="level-button nivel-3" onClick={handleLevel3Click}>
              <img src="python2.png" alt="Level 3" />
              <span>NIVEL 3</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cuadro Emergente */}
{showPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <button className="close-button" onClick={closePopup}>&times;</button> {/* Aquí usamos &times; para mostrar la "X" */}
      <p>{popupMessage}</p>
      {/* Agrega el GIF aquí */}
      <img src="YtS0.gif" alt="Motivational GIF" className="popup-gif" />
    </div>
  </div>
)}

    </div>
  );
};

export default Lecciones;
