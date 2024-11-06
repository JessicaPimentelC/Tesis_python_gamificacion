import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Lesson from './Lesson';
import Positions from './Positions';
import Challenges from './Challenges';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Sidebar from './Sidebar';
import Header from './Header';
import PinguinoModal from './PinguinoModal';

const Dashboard = () => {
  const [loadingProgress2, setLoadingProgress2] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPositions, setShowPositions] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // Estado para el paso actual del recorrido

  React.useEffect(() => {
    const interval2 = setInterval(() => {
      setLoadingProgress2((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval2);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(interval2);
    };
  }, []);

  const handleControlPanelClick = () => {
  };

  const handleCerrarSesionClick = () => {
    setShowModal(true);
  };

  const handleConfirmCerrarSesion = () => {
    setShowModal(false);
    window.location.href = "http://localhost:8000/myapp/login/";
  };

  const handleCancelCerrarSesion = () => {
    setShowModal(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLessonClick = () => {
    navigate('/lesson');
  };

  const handlePositionsClick = () => {
    navigate('/positions');
  };

  const handleChallengesClick = () => {
    navigate('/challenges');
  };

  const handlePythonIconClick = () => {
    navigate('/lecciones'); 
  };

  const handleForoIconClick = () => {
    navigate('/foro'); 
  };

  const handleProgreso = () => {
    navigate('/progreso'); 
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleRuletaClick = () => {
    navigate('/challenges');
  };

  const [showPenguinModal, setShowPenguinModal] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); 

  const handlePenguinClick = () => {
    setShowPenguinModal(true);
    setShowWelcomeMessage(true);
    setCurrentStep(0); // Reinicia el paso actual al abrir el modal
    setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 3000); 
  };

  // Pasos del recorrido
  const steps = [
    {
      content: 'Aquí puedes navegar a las diferentes secciones de la aplicación.',
      icon: 'icon1.png', // Ruta al icono correspondiente
    },
    {
      content: 'Este es el encabezado donde puedes ver opciones generales.',
      icon: 'icon2.png', // Ruta al icono correspondiente
    },
    {
      content: '¡Haz clic aquí para obtener ayuda de Pingüino Jessica!',
      icon: 'icon3.png', // Ruta al icono correspondiente
    },
    {
      content: 'Aquí puedes comenzar con el Nivel 1 para aprender los fundamentos.',
      icon: 'icon4.png', // Ruta al icono correspondiente
    },
    {
      content: 'En esta sección, puedes ver tu posición entre otros usuarios.',
      icon: 'icon5.png', // Ruta al icono correspondiente
    },
    {
      content: 'Aquí puedes girar la ruleta y ganar premios.',
      icon: 'icon6.png', // Ruta al icono correspondiente
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1); // Avanza al siguiente paso
    } else {
      setShowPenguinModal(false); // Cierra el modal al final del recorrido
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <Header/>

      <div className="dashboard-content">
        <div className="dashboard">
            <div className="penguin-container" onClick={handlePenguinClick}>
                <div className="penguin">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="beak"></div>
                    <div className="foot left"></div>
                    <div className="foot right"></div>
                </div>
            </div>

            {showWelcomeMessage && (
                <div className="welcome-message">
                    <p>Hola Usuario, Bienvenido a nuestra app</p>
                </div>
            )}

            {showPenguinModal && (
                <div className="modal-overlay" onClick={() => setShowPenguinModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>¡Hola, usuario! Soy Pingui, y estoy aquí para darte una introducción.</h2>
                        <p>{steps[currentStep].content}</p>
                        <img src={steps[currentStep].icon} alt="proximo.png" className="step-icon" />
                        <button onClick={handleNext}>Siguiente</button>
                    </div>
                </div>
            )}
        </div>
        
        <div className="dashboard-left" onClick={() => navigate('/lecciones')}>
          <button className="info-box-lesson lesson-box">
            <h1>NIVEL 1</h1>
            Programa tu futuro hoy mismo
          </button>
          <div className="button-route">
            <button className={`route-button ${currentStep === 0 ? 'active' : ''}`} onClick={handlePythonIconClick}>
              <img src="python1.png" alt="Python Icon" className="icon-img" />
            </button> 
            <button className={`route-button ${currentStep === 1 ? 'active' : ''}`}>
              <img src="libero.png" alt="Book Icon" className="icon-img" />
            </button>
            <button className={`route-button ${currentStep === 2 ? 'active' : ''}`}>
              <img src="bombillo.png" alt="Star Icon" className="icon-img" />
            </button>
            <button className={`route-button ${currentStep === 3 ? 'active' : ''}`}>
              <img src="cohetee.png" alt="Rocket Icon" className="icon-img" />
            </button>
            <button className={`route-button ${currentStep === 4 ? 'active' : ''}`}>
              <img src="cofre.png" alt="Treasure Icon" className="icon-img" />
            </button>
          </div>
        </div>
        
        <div className="dashboard-right">
          <button className="info-box-lesson lesson-box" onClick={handlePositionsClick}>
            <div className="icon-container">
              <img src="personas.png" alt="Icono" className="icon" />
            </div>
            <h2>Posiciones</h2>
            <p>Aspira a sobresalir entre nuestros usuarios destacados</p>
          </button>
          
          <button className="info-box-lesson lesson-box">
            <h2>Progreso</h2>
            <ProgressBar/>
          </button>

          <div style={{ position: 'relative', width: '400px', height: '400px' }} onClick={handleRuletaClick} role="button" aria-label="Ruleta Button">
            <div id="ruleta">
              <div id="sectores">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div id="divisores">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div id="caras">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div id="triangulo"></div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCancelCerrarSesion}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>¿Cerrar sesión?</h2>
            <p>¿Estás seguro de que deseas cerrar sesión?</p>
            <button onClick={handleConfirmCerrarSesion}>Sí</button>
            <button onClick={handleCancelCerrarSesion}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
