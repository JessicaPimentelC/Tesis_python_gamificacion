import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeaderBody.css';


const HeaderBody = ({ nombre, puntaje, insignias }) => {
    const [currentTime, setCurrentTime] = useState('');
    const navigate = useNavigate(); // Hook para la redirección
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [score, setScore] = useState(0);
    const [hoveredInsignia, setHoveredInsignia] = useState(null);

    const handleForoIconClick = () => {
        navigate("/foro");
    };
    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };
    const handleControlPanelClick = () => {
        // Logic for the control panel
    };
    
    const handleCerrarSesionClick = () => {
        setShowModal(true);
    };
    
    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        setCurrentTime(now.toLocaleString());
        }, 1000); // Actualiza cada segundo

        return () => clearInterval(interval);
    }, []);

    
    const handleConfirmCerrarSesion = () => {
    // Logic to log out
    setShowModal(false);
    window.location.href = '"http://localhost:8000/myapp/login/';
    };
    //"http://localhost:8000/myapp/login/",

    const handleCancelCerrarSesion = () => {
    setShowModal(false);
    };
    
  // Función para redirigir a la página de insignias
    const handleInsigniaClick = () => {
        navigate('/insignias');
    };

    
    return (
        <div className="info-container">
            <div className="info-item">
            <h3><img src="jugador.png" alt="Icono Nombre" className="info-icon" /> Nombre:</h3>
            <p>Eduardo Jose Daza</p>
            </div>
            <div className="info-item">
            <h3><img src="puntaje.png" className="info-icon" /> Puntaje:</h3>
            <p>{score}</p>
            </div>
            <div className="info-item">
            <h3><img src="insignia.png" alt="Icono Insignias" className="info-icon" /> Insignias:</h3>
            <div className="icons-container">
                {[
                { src: "tres.png", name: "Insignia 1" },
                { src: "bombillo.png", name: "Insignia 2" },
                { src: "megafono.png", name: "Insignia 3" },
                { src: "cohetee.png", name: "Insignia 4" },
                { src: "ruta.png", name: "Insignia 5  " },
                ].map((insignia, index) => (
                <div key={index} className="circular-icon-container">
                    <button
                    className="circular-icon"
                    onClick={handleInsigniaClick}
                    onMouseEnter={() => handleMouseEnter(insignia.name)}
                    onMouseLeave={handleMouseLeave}
                    >
                    <img src={insignia.src} alt={insignia.name} />
                    </button>
                    {hoveredInsignia === insignia.name && <p className="hovered-insignia">{insignia.name}</p>}
                </div>
                ))}
            </div>
            </div>
            <div className="info-item">
            <h3><img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" /> Hora y Fecha:</h3>
            <p>{currentTime}</p>
            </div>
        </div>

    );
};

export default HeaderBody;
