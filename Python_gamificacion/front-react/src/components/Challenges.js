import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/Dashboard.css';

const Challenges = ({ progress }) => {
  return (
    <div className="challenges-box info-box">
      <h2>Desafíos del día</h2>
      <p>Gana 41 puntos</p>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Challenges;
