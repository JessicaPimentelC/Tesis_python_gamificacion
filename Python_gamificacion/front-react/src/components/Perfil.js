// Perfil.js
import React from 'react';
import '../Perfil.css'; // Asegúrate de tener el archivo CSS correspondiente para los estilos

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h2>Perfil de Usuario</h2>
      </div>
      <div className="perfil-content">
        <div className="perfil-info">
          <img src="foto_usuario.jpg" alt="Foto de usuario" className="perfil-picture" />
          <h3>Nombre de la Persona</h3>
          <p>Nombre de Usuario</p>
          <p>Fecha de Unión: 01/01/2022</p>
        </div>
        <div className="perfil-stats">
          <h3>Estadísticas</h3>
          <div className="perfil-stats-table">
            {/* Aquí va la tabla de estadísticas con los logos */}
          </div>
        </div>
      </div>
      <div className="perfil-logros">
        <h3>Logros</h3>
        <div className="logros-container">
          {/* Aquí van las tablas de logros */}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
