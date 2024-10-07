import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';


const Header = ({ nombre, puntaje, insignias }) => {
    const [currentTime, setCurrentTime] = useState('');
    const navigate = useNavigate(); // Hook para la redirección
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showModal, setShowModal] = React.useState(false);

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
    
    return (
        <div class="dashboard-header">
        <div className="control-panel">
            
            </div>
            <div className="user-profiles">
            <div className="user-profile">
                <img
                src="banderin.png"
                alt="Imagen de perfil"
                className="profile-picture"
                />
            </div>
            <div className="user-profile">
                <img
                src="cinta.png"
                alt="Imagen de perfil"
                className="profile-picture"
                />
            </div>
            <div className="user-profile">
                <img
                src="conversacion.png"
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
                <img
                src="AYUDA.jpeg"
                alt="Imagen de perfil"
                className="profile-picture"
                />
                {dropdownOpen && (
                <div className="dropdown-menu">
                    <button
                    onClick={() => navigate("/profile")}
                    className="dropdown-item"
                    >
                    Perfil
                    </button>
                    <button
                    onClick={handleCerrarSesionClick}
                    className="dropdown-item"
                    >
                    Cerrar Sesión
                    </button>
                </div>
                )}
            </div>
            </div>
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

export default Header;
