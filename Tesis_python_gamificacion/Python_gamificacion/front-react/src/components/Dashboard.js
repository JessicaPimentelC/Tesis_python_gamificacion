import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Lesson from './Lesson';
import Positions from './Posiciones';
import Challenges from './Challenges';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import ProgresoBar from './ProgresoBar';

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
    navigate('/posiciones');
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

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img className="sidebar-imagen" src="tesis.png" alt="Icono"  />
      </div>
      <div className="dashboard-header">
        <div className="control-panel">
          <button
            onClick={handleControlPanelClick}
            className="control-panel-button">
            Panel de Control
          </button>
        </div>
        <div className="user-profiles">
          <div className="user-profile">
            <img
              src="bandera.png"
              alt="Imagen de perfil"
              className="profile-picture"
            />
          </div>
          <div className="user-profile">
            <img
              src="medalla.png"
              alt="Imagen de perfil"
              className="profile-picture"/>
          </div>
          <div className="user-profile">
            <img
              src="mensaje.png"
              alt="Imagen de perfil"
              className="profile-picture"
              onClick={handleForoIconClick}/>
          </div>
          <div
            className="user-profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="AYUDA.jpeg"
              alt="Imagen de perfil"
              className="profile-picture"
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button
                  onClick={() => navigate("/profile")}
                  className="dropdown-item"
                >
                  Perfil
                </button>
                <button
                  onClick={handleCerrarSesionClick}
                  className="dropdown-item"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div></div>
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
              <img src="libro.png" alt="Book Icon" className="icon-img" />
            </button>
            <button className="route-button">
              <img src="estrella.png" alt="Star Icon" className="icon-img" />
            </button>
            <button className="route-button">
              <img src="cohete.png" alt="Rocket Icon" className="icon-img" />
            </button>
            <button className="route-button">
              <img src="tesoro.png" alt="Treasure Icon" className="icon-img" />
            </button>
          </div>
        </div>
      
      <div className="dashboard-right">
        <button className="info-box positions-box" onClick={handlePositionsClick}>
        <h2>¡¡Posiciones!!</h2>
        Aspira a sobresalir entre nuestros usuarios destacados
        </button>
        <button className="info-box positions-box" >
        <h2>Progreso</h2>
        <ProgresoBar/>
        </button>
        <button className="info-box challenges-box"
          onClick={handleChallengesClick} >
          <Challenges progress={loadingProgress2} />
        </button>
        <button className="info-box timer-box">
          <Timer time="4:30:41" />
        </button>
      </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>¿Deseas cerrar sesión?</p>
            <button onClick={handleConfirmCerrarSesion}>Sí</button>
            <button onClick={handleCancelCerrarSesion}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;