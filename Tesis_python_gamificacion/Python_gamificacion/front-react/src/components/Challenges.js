import React from 'react';
import ProgressBar from './ProgresoBar';
import '../styles/Dashboard.css';

const Challenges = ({ progress }) => {
  return (
    <div className="challenges-box info-box">
      <h2>Desafíos del día</h2>
      <p>Gana 41 puntos</p>
    </div>
  );
};

export default Challenges;
