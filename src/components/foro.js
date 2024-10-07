import React, { useState } from 'react';
import '../styles/foro.css';
import { useNavigate } from 'react-router-dom';

const Foro = ({ toggleView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [question, setQuestion] = useState('');
  const [responseUsername, setResponseUsername] = useState('');
  const [responseText, setResponseText] = useState('');
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      user: 'Usuario001',
      time: '10:26 26/03/2024',
      text: '¿Por qué al imprimir un ciclo while los resultados no terminan de mostrarse en pantalla?',
      answers: [
        {
          user: 'Usuario003',
          time: '11:00 26/03/2024',
          text: 'Quizás es un problema con la condición de salida del ciclo.',
        },
      ],
    },
    {
      user: 'Usuario002',
      time: '14:26 28/06/2024',
      text: 'Tengo este problema, me sale este error TypeError: unsupported operand type(s) for +: \'int\' and \'str\' al imprimir una suma',
      answers: [],
    }
  ]);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleBackClick = () => {
      navigate('/dashboard');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsResponseModalOpen(false);
  };

  const handleSubmit = () => {
    if (username && question) {
      setQuestions([
        ...questions,
        {
          user: username,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString(),
          text: question,
          answers: [],
        }
      ]);
      setUsername('');
      setQuestion('');
      setSuccessMessage('¡Pregunta publicada exitosamente!');
      setTimeout(() => setSuccessMessage(''), 3000);
      closeModal();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const openResponseModal = (index) => {
    setCurrentQuestionIndex(index);
    setIsResponseModalOpen(true);
  };

  const handleResponseSubmit = () => {
    if (responseUsername && responseText && currentQuestionIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].answers.push({
        user: responseUsername,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString(),
        text: responseText,
      });
      setQuestions(updatedQuestions);
      setResponseUsername('');
      setResponseText('');
      setSuccessMessage('¡Respuesta publicada exitosamente!');
      setTimeout(() => setSuccessMessage(''), 3000);
      closeModal();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredQuestions = questions.filter((q) =>
    q.user.toLowerCase().includes(searchText.toLowerCase()) ||
    q.text.toLowerCase().includes(searchText.toLowerCase()) ||
    q.answers.some(a => a.text.toLowerCase().includes(searchText.toLowerCase()))
  );

  return (
    <div className="foro-container">
      <div className="foro-header">
        <button onClick={handleBackClick} className="back-button">
          <img src="atrasa.png" alt="Back" className="back-icon" />
        </button>
        <input
          type="text"
          placeholder="Buscar por usuario o palabra..."
          className="search-bar"
          value={searchText}
          onChange={handleSearchChange}
        />
        <div className="icon-group">
          <img src="colombia.png" alt="Icon 1" className="header-icon" />
          <img src="informacion.png" alt="Icon 2" className="header-icon" />
          <img src="conversacion.png" alt="Icon 3" className="header-icon" />
          <img src="persona.png" alt="Profile" className="header-icon" />
        </div>
      </div>
      <div className="foro-content">
        <div className="foro-subheader">
          <button className="new-question" onClick={openModal}>Nueva Pregunta</button>
        </div>
        <div className="foro-title">
          Únete a la conversación en nuestro foro
        </div>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <div className="foro-questions">
          {filteredQuestions.map((q, index) => (
            <div className="question" key={index}>
              <div className="question-header">
                <p className="question-info">{q.user} Hora {q.time}</p>
              </div>
              <p className="question-text">{q.text}</p>
              <div className="answers">
                {q.answers.map((a, idx) => (
                  <div className="answer" key={idx}>
                    <div className="answer-header">
                      <p className="answer-info">Respuesta: {a.user} Hora {a.time}</p>
                    </div>
                    <p className="answer-text">{a.text}</p>
                  </div>
                ))}
              </div>
              <div className="actions">
                <div className="like-dislike">
                  <img src="like.png" alt="Like" className="like-icon" />
                  <img src="nomegusta.png" alt="Dislike" className="dislike-icon" />
                </div>
                <div className="additional-actions">
                  <img 
                    src="eliminar.png" 
                    alt="Eliminar" 
                    className="action-icon"
                    onClick={() => handleDelete(index)}
                  />
                  <img
                    src="correo.png"
                    alt="Correo"
                    className="action-icon"
                    onClick={() => openResponseModal(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Publicar Nueva Pregunta</h2>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="modal-input"
            />
            <textarea
              placeholder="Descripción de la Pregunta"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="modal-textarea"
            />
            <button onClick={handleSubmit} className="modal-button">Publicar</button>
            <button onClick={closeModal} className="modal-close">Cerrar</button>
          </div>
        </div>
      )}

      {isResponseModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Responder Pregunta</h2>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              value={responseUsername}
              onChange={(e) => setResponseUsername(e.target.value)}
              className="modal-input"
            />
            <textarea
              placeholder="Descripción de la Respuesta"
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              className="modal-textarea"
            />
            <button onClick={handleResponseSubmit} className="modal-button response-button">Publicar Respuesta</button>
            <button onClick={closeModal} className="modal-close">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Foro;
