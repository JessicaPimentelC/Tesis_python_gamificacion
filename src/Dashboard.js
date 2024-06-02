import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bienvenido a la Pagina Principal</h1>
        {/* Agregar el botón para el panel de control */}
        <button className="control-panel-button">Panel de Control</button>
      </div>
      <div className="dashboard-content">
        {/* Aquí va el contenido del dashboard */}
        <p>Esta es tu área personal.</p>
      </div>
      <div className="dashboard-footer">
        {/* Agregar el perfil de usuario */}
        <div className="user-profile">
          <img src="url_de_tu_imagen_de_perfil" alt="Imagen de perfil" className="profile-picture" />
          <p>Nombre de usuario</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


