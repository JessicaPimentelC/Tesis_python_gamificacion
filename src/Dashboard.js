import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const handleControlPanelClick = () => {
    // Lógica para el panel de control
  };

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Dashboard</h1>
      <div className="dashboard-header">
        {/* Agregar el panel de control */}
        <div className="control-panel">
          <button onClick={handleControlPanelClick} className="control-panel-button">Panel de Control</button>
        </div>
        {/* Aquí va el perfil de usuario */}
        <div className="user-profile">
          <img src="bandera.png" alt="Imagen de perfil" className="profile-picture" />
          <p></p>
        </div>
        <div className="user-profile">
          <img src="medalla.png" alt="Imagen de perfil" className="profile-picture" />
          <p></p>
        </div>
        <div className="user-profile">
          <img src="mensaje.png" alt="Imagen de perfil" className="profile-picture" />
          <p></p>
        </div>
        <div className="user-profile">
          <img src="AYUDA.jpeg" alt="Imagen de perfil" className="profile-picture" />
          <p>Perfil</p>
        </div>
      </div>
      <div className="dashboard-content">
        <p>Esta es tu área personal.</p>
      </div>
    </div>
  );
};

export default Dashboard;
