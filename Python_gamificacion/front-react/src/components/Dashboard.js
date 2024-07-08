import React from 'react';
import '../styles/Dashboard.css';
import LoadingBar from './LoadingBar';

const Dashboard = ({ toggleView }) => {
  const [loadingProgress1, setLoadingProgress1] = React.useState(0);
  const [loadingProgress2, setLoadingProgress2] = React.useState(0);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    // Simula la progresión de la barra de carga 1
    const interval1 = setInterval(() => {
      setLoadingProgress1((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval1);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    // Simula la progresión de la barra de carga 2
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
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const handleControlPanelClick = () => {
    // Lógica para el panel de control
  };

  const handleCerrarSesionClick = () => {
    setShowModal(true);
  };

  const handleConfirmCerrarSesion = () => {
    // Lógica para cerrar sesión
    setShowModal(false);
    window.location.href = 'http://localhost:3000/login'; // Redirige a la página de inicio de sesión
  };

  const handleCancelCerrarSesion = () => {
    setShowModal(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
                {console.log("toggleView:", toggleView)}
                <button onClick={() => toggleView('profile')} className="dropdown-item">Perfil</button> {/* Cambia la vista a 'profile' */}
                <button onClick={handleCerrarSesionClick} className="dropdown-item">Cerrar Sesión</button>
                <button onClick={handleCerrarSesionClick} className="dropdown-item">Cerrar Sesión</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <p>Progreso Nivel 1</p>
        <div className="center">
          <LoadingBar progress={loadingProgress1} />
        </div>
      </div>
      <div className="info-boxes">
        <div className="info-box">
          <img src="oro.png" alt="Logo 1" />
          <p>¡¡Posiciones!!</p>
          <p>Aspira a sobresalir entre nuestros usuarios destacados</p>
        </div>
        <div className="info-box">
          <img src="diana.png" alt="Logo 2" />
          <p>Desafíos del día</p>
          <LoadingBar progress={loadingProgress2} /> <br></br>
          <img src="tesoro.png" alt="Logo 2" />
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>¿Deseas cerrar sesión?</p>
            <div>
              <button onClick={handleConfirmCerrarSesion}>Sí</button>
              <button onClick={handleCancelCerrarSesion}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

