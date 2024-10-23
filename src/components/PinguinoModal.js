import React, { useState } from 'react';
import '../styles/PinguinoModal.css';
import { useNavigate } from 'react-router-dom';

const PinguinoModal = () => {
    const navigate = useNavigate();
    const [showPenguinModal, setShowPenguinModal] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // Estado para el mensaje de bienvenida

    const handlePenguinClick = () => {
        setShowPenguinModal(true);
        setShowWelcomeMessage(true); // Mostrar el mensaje de bienvenida
        setTimeout(() => {
            setShowWelcomeMessage(false); // Ocultar después de 3 segundos
        }, 3000); // Duración del mensaje
    };

    const closeModal = () => {
        setShowPenguinModal(false);
    };

    return (
        <div className="dashboard">
            <div className="penguin-container" onClick={handlePenguinClick}>
                <div className="penguin">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="beak"></div>
                    <div className="foot left"></div>
                    <div className="foot right"></div>
                </div>
            </div>

            {/* Mensaje de bienvenida */}
            {showWelcomeMessage && (
                <div className="welcome-message">
                    <p>Hola Usuario, Bienvenido a nuestra app</p>
                </div>
            )}

            {showPenguinModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>¡Hola, soy pingui jessica!</h2>
                        <p>Aquí podrás encontrar todas las ayudas que necesites para completar los ejercicios. ¡No dudes en consultarlo cuando lo necesites!</p>
                        
                        <div className="nivel1-card-header">
                            <p>Seleccione una Ayuda:</p>
                        </div>
                        
                        <div className="modal-icons">
                            <button className="modal-icon-button" onClick={() => alert('Ayuda 1: Idea')}>
                                <img src="74.png" alt="Icono 1" className="modal-icon" />
                            </button>
                            
                            <button className="modal-icon-button" onClick={() => alert('Ayuda 2: Apoyo')}>
                                <img src="apoyo.png" alt="Icono 2" className="modal-icon" />
                            </button>

                            <button className="modal-icon-button" onClick={() => alert('Ayuda 3: Cuaderno')}>
                                <img src="dibujo.png" alt="Icono 3" className="modal-icon" />
                            </button>
                        </div>

                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PinguinoModal;
