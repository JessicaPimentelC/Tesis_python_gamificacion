import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate(); // Hook para la redirección
    const [currentTime, setCurrentTime] = useState('');

    // Función para actualizar la hora y fecha
    const updateTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleString()); // Formato de fecha y hora
    };

    // Efecto para actualizar la hora cada segundo
    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000); // Actualiza cada segundo
        return () => clearInterval(interval); // Limpieza al desmontar
    }, []);

    return (
        <div className="sidebar">
            <img 
                className="sidebar-imagen" 
                src="tesis.png" 
                alt="Icono" 
                onClick={() => navigate('/dashboard')} 
                style={{ cursor: 'pointer' }} 
            />
            {/* Info Item para Hora y Fecha */}
            <div className="reloj">
                <img  className="info-icon" src="reloj-circular.png" alt="Icono Hora y Fecha" /> 
                <p>{currentTime}</p>
            </div>
            {/**<button className="sidebar-button" onClick={() => navigate('/configuracion')}>
                <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
                Configuración
            </button>**/}
            <div className="score">
                {/* Puedes agregar más contenido aquí si es necesario */}
            </div>
        </div>
    );
}

export default Sidebar;
