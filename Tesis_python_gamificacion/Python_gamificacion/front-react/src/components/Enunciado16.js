import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/enunciado16.css';  

const Enunciado16 = () => {
    const [showGif, setShowGif] = useState(false);
    const [showContinue, setShowContinue] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showImportInfo, setShowImportInfo] = useState(false); // Estado para mostrar el mensaje de import
    const [showDatetimeInfo, setShowDatetimeInfo] = useState(false); // Estado para mostrar el mensaje de datetime
    const navigate = useNavigate(); // Hook para la redirección
    const [score, setScore] = useState(0); // Estado para el puntaje
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Estado para la hora y fecha actual
    

    const handleShowGif = () => {
        setShowGif(true);
        setTimeout(() => {
        setShowContinue(true);
        }, 2000); // Asume que el GIF tiene una duración de 2 segundos
    };

    const handleContinueClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/16'); // Cambia la vista al siguiente componente
    };

    const handleImportClick = () => {
        setShowImportInfo(true);
    };

    const handleCloseImportInfo = () => {
        setShowImportInfo(false);
    };

    const handleDatetimeClick = () => {
        setShowDatetimeInfo(true);
    };

    const handleCloseDatetimeInfo = () => {
        setShowDatetimeInfo(false);
    };

    return (
        <div className="nivel1-container">
        <div className="sidebar">
            <img src="tesis.png" alt="Logo" className="logo" />
            <button className="sidebar-button" onClick={() => navigate('/Ej9')}>
            <img src="flecha.png" alt="Inicio" className="sidebar-icon" />
            Atrás
            </button>
            <button className="sidebar-button" onClick={() => navigate('/configuracion')}>
            <img src="configuracion.png" alt="Configuración" className="sidebar-icon" />
            CONFIGURACIÓN
            </button>
            <div className="score">
            <img src="puntaje.png" alt="Icono Puntaje" className="score-icon" />
            <p className="score-text">Puntaje: {score}</p>            
            </div>
        </div>
        <div className="content">
            <div className="white-background">
            <div className="header">
                <button className="icon-button">
                <img src="python1.png" alt="Icono Nivel" />
                </button>
                <div className="header-title">
                <h2>NIVEL 1</h2>
                </div>
                <div className="header-status">
                <span></span>
                <button className="icon-button">
                    <img src="informacion.png" alt="Icono Moneda" />
                </button>
                <button className="icon-button" onClick={() => navigate('/dashboard')}>
                    <img src="ubicacion.png" alt="Icono Pregunta" />
                </button>
                <button className="icon-button">
                    <img src="AYUDA.jpeg" alt="Icono Perfil" />
                </button>
                </div>
            </div>
            <div className="nivel1-card">
                <div className="nivel1-card-header">
                <span>Cálculo de Edad</span>
                </div>
                <div className="nivel1-card-body">
                <p>
                    En este módulo, aprenderás a calcular la edad en Python. El programa pedirá al usuario que ingrese su año de nacimiento y luego calculará su edad actual.
                </p>
                <div className="code-box">
                    <div className="code-header">Python</div>
                    <pre className="code-content">
                    <code>
                        {`from datetime `}&nbsp;
                        <span className="import-link" onClick={handleImportClick}>
                        import
                        </span>
                        {` datetime\n\nano_nacimiento = int(input("Ingresa tu año de nacimiento: "))\nano_actual = `}
                        <span className="datetime-link" onClick={handleDatetimeClick}>
                        datetime
                        </span>
                        {`.now().year\nedad = ano_actual - ano_nacimiento\nprint("Tu edad es:", edad)\n`}
                    </code>
                    </pre>
                </div>

                {!showGif && (
                    <div className="nivel1-card-button-container">
                    <button className="nivel1-card-button" onClick={handleShowGif}>
                        Ver Simulación
                    </button>
                    </div>
                )}

                {showGif && (
                    <div className="gif-container">
                    <img src="enunciado16.gif" alt="GIF" className="gif-image" />
                    </div>
                )}

                {showContinue && (
                    <div className="nivel1-card-button-container">
                    <button className="nivel1-card-button" onClick={handleContinueClick}>
                        Continuar
                    </button>
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>

        {showModal && (
            <div className="modal-overlay">
            <div className="modal-content">
                <h2>¡Sigue avanzando en Python!</h2>
                <p>
                🌟 ¡Excelente trabajo! 🚀 Ahora has aprendido a calcular la edad en Python. Sigue practicando y mejorando tus habilidades. ¡Adelante, lo estás haciendo genial!
                </p>
                <img src="ICU.gif" alt="GIF de bienvenida" className="modal-gif" />
                <button className="modal-close-button" onClick={handleCloseModal}>
                Continuar
                </button>
            </div>
            </div>
        )}

        {showImportInfo && (
            <div className="info-overlay">
            <div className="info-content">
                <h3>Información sobre `import`</h3>
                <p>La palabra clave `import` en Python se utiliza para incluir módulos externos en el código, lo que permite utilizar funciones y clases definidas en esos módulos.</p>
                <button className="info-close-button" onClick={handleCloseImportInfo}>Cerrar</button>
            </div>
            </div>
        )}

        {showDatetimeInfo && (
            <div className="info-overlay">
            <div className="info-content">
                <h3>Información sobre `datetime`</h3>
                <p>El módulo `datetime` en Python proporciona clases para manipular fechas y horas. Puedes usarlo para obtener la fecha y hora actuales, calcular diferencias entre fechas y mucho más.</p>
                <button className="info-close-button" onClick={handleCloseDatetimeInfo}>Cerrar</button>
            </div>
            </div>
        )}
        </div>
    );
    };
export default Enunciado16;