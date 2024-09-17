import React, { useState } from 'react';
import '../../styles/20.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const Enunciado20 = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');
    const [showNext, setShowNext] = useState(false);
    const [score, setScore] = useState(0); // Estado para el puntaje
    const navigate = useNavigate(); // Hook para la redirección

    const checkAnswer = () => {
        // Lógica del ejercicio: convierte la temperatura de Celsius a Fahrenheit
        const celsius = parseFloat(inputValue);
        const fahrenheit = (celsius * 9/5) + 32;

        if (!isNaN(fahrenheit)) {
        setOutput(`Temperatura en Fahrenheit: ${fahrenheit}`);
        setScore(score + 10); // Incrementa el puntaje si la respuesta es correcta
        } else {
        setOutput('Inténtalo de nuevo.');
        }
        setShowNext(true); // Muestra el botón de siguiente
    };

    return (
        <div className="nivel1-container">
        <div className="sidebar">
            <img src="tesis.png" alt="Logo" className="logo" />
            <button className="sidebar-button" onClick={() => navigate('/enunciado19')}>
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
                <h2>EJERCICIO #20</h2>
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
                <span>Ejercicio de Conversión de Temperatura</span>
                <p>Ingresa la temperatura en Celsius para convertirla a Fahrenheit.</p>
                </div>
                <div className="nivel1-card-body">
                <div className="code-box">
                    <div className="code-header">PYTHON</div>
                    <div className="code-content">
                    <pre>
                        celsius = 25
                        fahrenheit = (celsius * 9/5) + 32
                        print(fahrenheit)
                    </pre>
                    </div>
                </div>

                <div className="input-container">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ingrese la temperatura en Celsius"
                    />
                </div>

                <button className="nivel1-card-button" onClick={checkAnswer}>
                    Verificar
                </button>
                {showNext && (
                    <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/examen')} // Ajusta la ruta según sea necesario
                    >
                    Finalizar
                    </button>
                )}

                {output && (
                    <div className="code-box">
                    <div className="code-header">SALIDA</div>
                    <pre>{output}</pre>
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Enunciado20;