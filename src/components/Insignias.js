import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Insignias.css";
import Sidebar from './Sidebar';
import Header from './Header';

const Insignias = () => {
  const navigate = useNavigate();

  // Estado para controlar el modal
  const [selectedInsignia, setSelectedInsignia] = useState(null);

  const user = {
    nombreCompleto: "Eduardo Jose Daza Palencia",
    nombreUsuario: "Eduardo223804",
    insignias: [
      { id: 1, nombre: "insignia", icono: "tres.png", descripcion: "xxxxxxxxxxxxx" },
      { id: 2, nombre: "insignia", icono: "bombillo.png", descripcion: "xxxxxxxxxxxxx" },
      { id: 3, nombre: "insignia", icono: "megafono.png", descripcion: "xxxxxxxxxxxxx" },
      { id: 4, nombre: "insignia", icono: "cohetee.png", descripcion: "xxxxxxxxxxxxx" },
      { id: 5, nombre: "insignia", icono: "fuego.png", descripcion: "xxxxxxxxxxxxx" },
      { id: 6, nombre: "insignia", icono: "ruta.png", descripcion: "xxxxxxxxxxxxx" },
    ],
  };

  // Función para abrir el modal con la información de la insignia seleccionada
  const openModal = (insignia) => {
    setSelectedInsignia(insignia);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedInsignia(null);
  };

  // Función para manejar la redirección
  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="dashboard-container">
      <Sidebar/>
     

      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-box">
            <img src="hombre.png" alt="Icono" className="profile-box-icon" />
            <div className="profile-info">
              <h2>{user.nombreCompleto}</h2>
              <p>{user.nombreUsuario}</p>
              <p className="insignia-number">Insignias: 6</p>
            </div>
          </div>
        </div>

        {/* Lista de insignias en grid */}
        <div className="insignias-grid">
          {user.insignias.map((insignia) => (
            <div key={insignia.id} className="insignia-item" onClick={() => openModal(insignia)}>
              <div className="insignia-icon">
                <img src={insignia.icono} alt={insignia.nombre} />
              </div>
              <div className="insignia-nombre">{insignia.nombre}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedInsignia && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{selectedInsignia.nombre}</h2>
            <p>{selectedInsignia.descripcion}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Insignias;
