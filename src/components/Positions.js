import React, { useState } from 'react';
import '../styles/positions.css';
import { useNavigate } from 'react-router-dom';

const Positions = ({ toggleView }) => {
    const [loadingProgress2, setLoadingProgress2] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate(); 
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const users = [
        { id: 1, avatar: '11.png', name: 'Usuario01', points: 120 },
        { id: 2, avatar: '12.png', name: 'Usuario02', points: 100 },
        { id: 3, avatar: '13.png', name: 'Usuario03', points: 80 },
        { id: 4, avatar: '14.png', name: 'Usuario04', points: 60 },
        { id: 5, avatar: '15.png', name: 'Usuario05', points: 44 },
    ];
    
    React.useEffect(() => {
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
        clearInterval(interval2);
        };
    }, []);

    const handleControlPanelClick = () => {
    };

    const handleCerrarSesionClick = () => {
        setShowModal(true);
    };

    const handleConfirmCerrarSesion = () => {
        // Logic to log out
    setShowModal(false);
    window.location.href = 'http://localhost:3000/login'; // Redirect to login page
    };
    //"http://localhost:8000/myapp/login/",

    const handleCancelCerrarSesion = () => {
        setShowModal(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLessonClick = () => {
        navigate('/lesson');
    };

    const handlePositionsClick = () => {
        // Logic to handle click on positions box
        navigate('/posiciones');
    };

    const handleChallengesClick = () => {
        // Logic to handle click on challenges box
        navigate('/challenges');
    };

    const handlePythonIconClick = () => {
        navigate('/lecciones'); 
    };
    const handleForoIconClick = () => {
        navigate('/foro'); 
    };
    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="dashboard-container">
        <div className="sidebar">
            <img className="sidebar-imagen" src="tesis.png" alt="Icono"  />
        </div>
        
        <div className="dashboard-header">
            <div className="control-panel">
            <div className="info-text">
                    <span>POSICIONES</span>
                </div>
            </div>
            <div className="user-profiles">
            <div className="user-profile">
                <img
                src="bandera.png"
                alt="Imagen de perfil"
                className="profile-picture"
                />
            </div>
            <div className="user-profile">
                <img
                src="medalla.png"
                alt="Imagen de perfil"
                className="profile-picture"/>
            </div>
            <div className="user-profile">
                <img
                src="mensaje.png"
                alt="Imagen de perfil"
                className="profile-picture"
                onClick={handleForoIconClick}/>
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
        </div>

        <div className="dashboard-content">
        <div className="medals">
    <img src="medalla2.png" alt="Medalla de Oro" className="medal-icon" />
    <img src="medalla1.png" alt="Medalla de Plata" className="medal-icon" />
    <img src="medalla3.png" alt="Medalla de Bronce" className="medal-icon" />
</div>

        </div>
        <table className="leaderboard">
    <thead>
        <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Puntos</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user, index) => (
            <tr key={user.id}>
                <td>{index + 1}</td>
                <td><img src={user.avatar} alt={`Avatar de ${user.name}`} style={{ width: '35px', height: '35px' }} /></td>
                <td>{user.name}</td>
                <td>{user.points}</td>
            </tr>
        ))}
    </tbody>
</table>
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

export default Positions;