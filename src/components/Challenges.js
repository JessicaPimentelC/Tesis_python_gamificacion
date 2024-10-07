import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Challenges.css'; // Importa el archivo CSS

const Challenges = () => {
  const navigate = useNavigate();

  // Función para navegar a challenges.js
  const handleChallengeClick = () => {
    navigate('/challenges');
  };

  // Función para navegar a Avances.js
  const handleAvancesClick = () => {
    navigate('/avances');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <Header />

{/* Componente de Desafíos del día */}
      <div className="desafios-container">
        <div className="header">
          <h2>Desafíos del día</h2>
          <div className="tiempo-restante">
            <img src="Despertador.png" alt="reloj" />
            <span>Cada 12 horas</span>
          </div>
        </div>
        
        {/* Primer desafío */}
        <div className="desafio nivel1" onClick={handleChallengeClick}>
          <div className="icono">
            <img src="objetivo.png" alt="Desafíos nivel 1" />
          </div>
          <div className="contenido">
            <div className="titulo">Desafíos nivel 1</div>
          </div>
          <div className="icono">
            <img src="objetivo.png" alt="Desafíos nivel 1" />
          </div>
        </div>

        {/* Segundo desafío */}
        <div className="desafio nivel2" onClick={handleChallengeClick}>
          <div className="icono">
            <img src="cima.png" alt="Desafíos nivel 2" />
          </div>
          <div className="contenido">
            <div className="titulo">Desafíos nivel 2</div>
          </div>
          <div className="icono">
            <img src="cima.png" alt="Desafíos nivel 2" />
          </div>
        </div>

        {/* Desafío bloqueado */}
        <div className="desafio bloqueado">
          <div className="icono">
            <img src="candado.png" alt="Desafío Bloqueado" />
          </div>
          <div className="contenido">
            <div className="bloqueado-texto">Desafío Bloqueado</div>
          </div>
          <div className="icono">
            <img src="candado.png" alt="Desafío Bloqueado" />
          </div>
        </div>

        {/* Botón de "Ver Avances" */}
        <button className="ver-avances-btn" onClick={handleAvancesClick}>
          Ver Avances
        </button>
      </div>
    </div>
  );
};

export default Challenges;
