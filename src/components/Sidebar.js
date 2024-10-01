import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate(); // Hook para la redirección

return(
    <div className="sidebar">
        <img 
            className="sidebar-imagen" 
            src="tesis.png" 
            alt="Icono" 
            onClick={() => navigate('/dashboard')} 
            style={{ cursor: 'pointer' }} 
            />
            {/**<button className="sidebar-button" onClick={() => navigate('/configuracion')}>
                <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
                Configuración
            </button>**/}
    <div className="score">
    </div>
    </div>

);
}
export default Sidebar;
