import React from 'react';
import '../styles/Dashboard.css';
import Lesson from './Lesson';
import Positions from './Positions';
import Challenges from './Challenges';
import Timer from './Timer';

const Dashboard = ({ toggleView }) => {
  const [loadingProgress2, setLoadingProgress2] = React.useState(0);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    // Simulate the progress of loading bar 2
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
    // Logic for the control panel
  };

  const handleCerrarSesionClick = () => {
    setShowModal(true);
  };

  const handleConfirmCerrarSesion = () => {
    // Logic to log out
    setShowModal(false);
    window.location.href = 'http://localhost:3000/login'; // Redirect to login page
  };

  const handleCancelCerrarSesion = () => {
    setShowModal(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLessonClick = () => {
    // Logic to handle click on lesson box
    toggleView('lesson');
  };

  const handlePositionsClick = () => {
    // Logic to handle click on positions box
    toggleView('positions');
  };

  const handleChallengesClick = () => {
    // Logic to handle click on challenges box
    toggleView('challenges');
  };

  const handlePythonIconClick = () => {
    // Logic to handle click on Python icon
    toggleView('lecciones'); // Navigate to Lecciones component
  };

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Mundo de la Gamificación</h1>
      <div className="dashboard-header">
        <div className="control-panel">
          <button onClick={handleControlPanelClick} className="control-panel-button">Panel de Control</button>
        </div>
        <div className="user-profiles">
          <div className="user-profile">
            <img src="bandera.png" alt="Imagen de perfil" className="profile-picture" />
          </div>
          <div className="user-profile">
            <img src="medalla.png" alt="Imagen de perfil" className="profile-picture" />
          </div>
          <div className="user-profile">
            <img src="mensaje.png" alt="Imagen de perfil" className="profile-picture" />
          </div>
          <div className="user-profile">
            <button onClick={toggleDropdown} className="profile-button">
              <img src="AYUDA.jpeg" alt="Imagen de perfil" className="profile-picture" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
<<<<<<< HEAD:Python_gamificacion/front-react/src/components/Dashboard.js
                {console.log("toggleView:", toggleView)}
                <button onClick={() => toggleView('profile')} className="dropdown-item">Perfil</button> {/* Cambia la vista a 'profile' */}
=======
                <button onClick={() => toggleView('profile')} className="dropdown-item">Perfil</button>
>>>>>>> f0a7b88552b56522d4bcbfd592c8648e396a9f72:src/components/Dashboard.js
                <button onClick={handleCerrarSesionClick} className="dropdown-item">Cerrar Sesión</button>
                <button onClick={handleCerrarSesionClick} className="dropdown-item">Cerrar Sesión</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-center">
          <div className="info-box lesson-box">
            <Lesson />
          </div>
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
              <img src="tesoro.png" alt="Rocket Icon" className="icon-img" />
            </button>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="info-box positions-box" onClick={handlePositionsClick}>
            <Positions />
          </div>
          <div className="info-box challenges-box" onClick={handleChallengesClick}>
            <Challenges progress={loadingProgress2} />
          </div>
          <div className="info-box timer-box">
            <Timer time="4:30:41" />
          </div>
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
