import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="sidebar">
                <img src="tesis.png" alt="Logo" className="logo" />
                <button className="sidebar-button">PANEL DE CONTROL</button>
                <button className="sidebar-button">Configuración</button>
                <button className="sidebar-button">Atras</button>
                
            </div>
            <div className="main-content">
                <div className="profile-header">
                    <img src="eduardo.png" alt="Foto de Usuario" className="profile-image" />
                    <div className="profile-info">
                        <h1>Eduardo Jose Daza Palencia</h1>
                        <p>Eduardo223804</p>
                        <p>Se unió en abril de 2018</p>
                    </div>
                    <button className="edit-button">✎</button>
                </div>
                <div className="profile-stats">
                    <h2>Estadísticas</h2>
                    <div className="stats-boxes">
                        <div className="stat-box">
                            <img src="medalla.png" alt="Icono Estadística" />
                        </div>
                        <div className="stat-box">
                            <img src="encendiendo.png" alt="Icono Estadística" />
                        </div>
                        <div className="stat-box">
                            <img src="fuego.png" alt="Icono Estadística" />
                        </div>
                    </div>
                </div>
                <div className="profile-achievements">
                    <h2>Logros</h2>
                    <div className="achievement-box">
                        <img src="reyes.png" alt="Icono Logro" />
                        <div className="achievement-progress">
                            <div className="achievement-bar" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="achievement-box">
                        <img src="mago.png" alt="Icono Logro" />
                        <div className="achievement-progress">
                            <div className="achievement-bar" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <img src="tesis.png" alt="Logo" className="logo" />
            </div>
        </div>
    );
};

export default Profile;
