import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Examennivel1.css';

function Examennivel1() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: ''
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/dashboard'); // Redirige a la página del examen o a donde prefieras
  };

  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="exam-container">
      <h1>Examen Nivel 1</h1>
      <form onSubmit={handleSubmit} className="exam-form">
        <div className="form-group">
          <label htmlFor="question1">Pregunta 1: ¿Cuál es la sintaxis correcta para imprimir en Python?</label>
          <input
            type="text"
            id="question1"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
            placeholder="Escribe tu respuesta aquí"
          />
        </div>

        <div className="form-group">
          <label htmlFor="question2">Pregunta 2: ¿Cómo se declara una variable en Python?</label>
          <input
            type="text"
            id="question2"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
            placeholder="Escribe tu respuesta aquí"
          />
        </div>

        <button type="submit" className="submit-btn">Enviar Examen</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Examen Enviado Correctamente</h2>
            <p><strong>Nombre:</strong> [Eduardo Jose Daza Palencia]</p>
            <p><strong>Fecha y Hora:</strong> {currentDateTime}</p>
            <p><strong>Puntaje:</strong> [10452]</p>
            <img src="2DV.gif" alt="Confirmation GIF" className="modal-gif" />
            <button className="close-modal" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Examennivel1;
