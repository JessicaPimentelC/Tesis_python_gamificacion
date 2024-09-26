import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Lesson from './Lesson';
import Positions from './Positions';
import Challenges from './Challenges';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ toggleView }) => {
  const [loadingProgress2, setLoadingProgress2] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPenguinModal, setShowPenguinModal] = useState(false);
  const navigate = useNavigate();

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
    // Logic for the control panel
  };

  const handleCerrarSesionClick = () => {
    setShowModal(true);
  };

  const handleConfirmCerrarSesion = () => {
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
    navigate('/lesson');
  };

  const handlePositionsClick = () => {
    navigate('/Positions');
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

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handlePenguinClick = () => {
    setShowPenguinModal(true);
  };

  const closePenguinModal = () => {
    setShowPenguinModal(false);
  };

  const closeModal = () => {
    setShowPenguinModal(false);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img className="sidebar-imagen" src="tesis.png" alt="Icono" />
      </div>
      <div className="dashboard-header">
        <div className="control-panel">
          <button onClick={handleControlPanelClick} className="control-panel-button">
            Panel de Control
          </button>
        </div>
        <div className="user-profiles">
          <div className="user-profile">
            <img src="bandera.png" alt="Imagen de perfil" className="profile-picture" />
          </div>
          <div className="user-profile">
            <img src="medalla.png" alt="Imagen de perfil" className="profile-picture" />
          </div>
          <div className="user-profile">
            <img
              src="discusion.png"
              alt="Imagen de perfil"
              className="profile-picture"
              onClick={handleForoIconClick}
            />
          </div>
          <div
            className="user-profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="AYUDA.jpeg" alt="Imagen de perfil" className="profile-picture" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => navigate("/profile")} className="dropdown-item">
                  Perfil
                </button>
                <button onClick={handleCerrarSesionClick} className="dropdown-item">
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="custom-box">
        <h2>BIENVENDIO A N</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <button className="try-now-button">Try Now</button>
      </div>
      <div className="dashboard-content">

        {/* NUEVO CUADRO AGREGADO - AHORA ESTÁ ARRIBA */}
        <div className="new-box">
          <h2>NUEVO CUADRO</h2>
          <p>Este es un cuadro adicional que puedes personalizar.</p>
          <button className="action-button">Acción</button>
        </div>

        {/* LOS OTROS CUADROS QUEDAN ABAJO */}
        <div className="new-box">
          <h2>NUEVO CUADRO 1</h2>
          <p>Este es otro cuadro adicional que puedes personalizar.</p>
          <button className="action-button">Acción</button>
        </div>

        <div className="new-box">
          <h2>NUEVO CUADRO 2</h2>
          <p>Este es un tercer cuadro adicional que puedes personalizar.</p>
          <button className="action-button">Acción</button>
        </div>

        <div className="dashboard-right" onClick={() => navigate('/lecciones')}>
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
      </div>

      {/* Contenedor del pingüino */}
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
</div>


      {/* Modal del pingüino */}
      {showPenguinModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>¡Hola, soy pingui jessica!</h2>
            <p>Aquí podrás encontrar todas las ayudas que necesites para completar los ejercicios. ¡No dudes en consultarlo cuando lo necesites!</p>
            
            <div className="nivel1-card-header">
              <p>Seleccione una Ayuda:</p>
            </div>
            
            {/* Contenedor de los iconos en forma vertical */}
            <div className="modal-icons">
              <button className="modal-icon-button" onClick={() => alert('Ayuda 1: Idea')}>
                <img src="idea.gif" alt="Icono 1" className="modal-icon" />
              </button>
              
              <button className="modal-icon-button" onClick={() => alert('Ayuda 2: Apoyo')}>
                <img src="apoyo.gif" alt="Icono 2" className="modal-icon" />
              </button>

              <button className="modal-icon-button" onClick={() => alert('Ayuda 3: Cuaderno')}>
                <img src="cuaderno.gif" alt="Icono 3" className="modal-icon" />
              </button>
            </div>

            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}

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
