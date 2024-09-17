import React, { useState, useEffect } from 'react';

const BarraSuperior = ({ nombre, puntaje, insignias }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        setCurrentTime(now.toLocaleString());
        }, 1000); // Actualiza cada segundo

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="info-container">
        <div className="info-item">
            <h3>
            <img src="jugador.png" alt="Icono Nombre" className="info-icon" /> Nombre:
            </h3>
            <p>{nombre}</p> {/* El nombre se pasa como prop */}
        </div>
        <div className="info-item">
            <h3>
            <img src="puntaje.png" alt="Icono Puntaje" className="info-icon" /> Puntaje:
            </h3>
            <p>{puntaje}</p> {/* Puntaje se pasa como prop */}
        </div>
        <div className="info-item">
            <h3>
            <img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:
            </h3>
            <p>{insignias}</p> {/* Insignias se pasan como prop */}
        </div>
        <div className="info-item">
            <h3>
            <img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" /> Hora y Fecha:
            </h3>
            <p>{currentTime}</p> {/* La fecha y hora se manejan con estado */}
        </div>
        </div>
    );
};

export default BarraSuperior;
