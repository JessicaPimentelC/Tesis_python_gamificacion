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
  const [loadingProgress2, setLoadingProgress2] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    // Logic to log out
    setShowModal(false);
    window.location.href = '"http://localhost:8000/myapp/login/'; // Redirect to login page
  };
  //"http://localhost:8000/myapp/login/",

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
    // Logic to handle click on positions box
    navigate('/positions');
  };

  const handleChallengesClick = () => {
    // Logic to handle click on challenges box
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
    navigate('/challenges'); // Navega al módulo Challenges.js
  };

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <Header/>

      <div className="dashboard-content">
        <PinguinoModal/>
        <div className="dashboard-left"  onClick={() => navigate('/lecciones')}>
          <button className="info-box-lesson lesson-box">
          <h1>NIVEL 1</h1>
          Programa tu futuro hoy mismo
          </button>
          <div className="button-route">
            <button className="route-button" onClick={handlePythonIconClick}>
              <img src="python1.png" alt="Python Icon" className="icon-img" />
            </button> 
            <button className="route-button">
              <img src="libero.png" alt="Book Icon" className="icon-img" />
            </button>
            <button className="route-button">
              <img src="bombillo.png" alt="Star Icon" className="icon-img" />
            </button>
            <button className="route-button">
              <img src="cohetee.png" alt="Rocket Icon" className="icon-img" />
            </button>
            <button className="route-button">
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
            <button className="info-box-lesson lesson-box" >
              <h2>Progreso</h2>
              <ProgressBar/>
            </button>
            <div style={{ position: 'relative', width: '400px', height: '400px' }}onClick={handleRuletaClick} role="button" aria-label="Ruleta Button">
      {/* Ruleta */}
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
      
    </div>
  );
};

export default Dashboard;