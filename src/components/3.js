import React, { useState, useEffect } from 'react';
import '../styles/3.css'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Tres = ({ toggleView }) => {
  const [input1, setInput1] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [isOpen, setIsOpen] = useState(false); // Estado para la barra lateral
  const [hoveredInsignia, setHoveredInsignia] = useState(null); // Estado para mostrar los nombres al hacer hover
  const [score, setScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  const positions = [
    { top: 50, left: 50, icon: "colombia.png" }, // Posición 1
    { top: 50, left: 100, icon: "cohetee.png" }, // Posición 2
    { top: 50, left: 150, icon: "empresario.png" }, // Posición 3
    { top: 50, left: 200, icon: "tres.png" }, // Posición 4
    { top: 100, left: 50, icon: "libero.png" }, // Posición 5
    { top: 150, left: 50, icon: "ed.png" }, // Posición 6
    { top: 200, left: 50, icon: "geometrico.png" }, // Posición 7
    { top: 200, left: 100, icon: "41.png" }, // Posición 8
    { top: 200, left: 150, icon: "42.png" }, // Posición 9
    { top: 200, left: 200, icon: "43.png" }, // Posición 10
    { top: 250, left: 200, icon: "44.png" }, // Posición 11
    { top: 300, left: 200, icon: "45.png" }, // Posición 12
    { top: 350, left: 200, icon: "46.png" }, // Posición 13
    
  ];
  // Función para redirigir a la página de insignias
  const handleInsigniaClick = () => {
    navigate('/insignias');
  };


  const checkAnswer = () => {
    if (input1.trim().toLowerCase() === '75') {
      setResult('correct');
      setShowNext(true); // Muestra el botón "Siguiente"
    } else {
      setResult('incorrect');
      setShowNext(false); // Oculta el botón "Siguiente"
    }
  };
  const closeModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  const handleMouseEnter = (name) => {
    setHoveredInsignia(name); // Establece el nombre inmediatamente
  };
  const handleMouseLeave = () => {
    // No hacemos nada aquí para evitar el parpadeo
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="nivel1-page">
      <Sidebar></Sidebar>
      {/* Barra de carga alineada a la izquierda de la pantalla */}
      {/**<div className="loading-indicator-outer">
        <LoadingIndicator /> {/* Reemplaza ProgressBar con LoadingIndicator </div>**/}
      <div className="nivel1-container">
        {/* Contenedor principal con el cuadro de información y el contenido principal */}
        <div className="content">
          {/* Contenedor de información sin GIF */}
        
          {/* Sección principal con el ejercicio */}
    
          <div className="white-background">
            <div className="header">
              <div className="icons-container">
                  {[
                  { src: "tres.png", name: "Insignia 1" },
                  { src: "bombillo.png", name: "Insignia 2" },
                  { src: "megafono.png", name: "Insignia 3" },
                  { src: "cohetee.png", name: "Insignia 4" },
                  { src: "accion.png", name: "Insignia 6  " },
                  { src: "25.png", name: "Insignia 7  " },
                  { src: "26.png", name: "Insignia 8  " },
                  { src: "22.png", name: "Insignia 9  " },
                  { src: "23.png", name: "Insignia 10  " },
                  { src: "24.png", name: "Insignia 5  " },
                  ].map((insignia, index) => (
                  <div key={index} className="circular-icon-container">
                      <button
                      className="circular-icon"
                      onClick={handleInsigniaClick}
                      onMouseEnter={() => handleMouseEnter(insignia.name)}
                      onMouseLeave={handleMouseLeave}
                      >
                      <img src={insignia.src} alt={insignia.name} />
                      </button>
                      {hoveredInsignia === insignia.name && <p className="hovered-insignia">{insignia.name}</p>}
                  </div>

                ))}
              </div>
            

            </div>
            <div className="header-title">
                <h2>NIVEL 1</h2>
                <div className="header-status">
                <span></span>
                <button className="icon-button">
                  <img src="informacion.png" alt="Icono Moneda" />
                </button>
                <button className="icon-button" onClick={() => navigate('/dashboard')}>
                  <img src="colombia.png" alt="Icono Pregunta" />
                </button>
                <button className="icon-button">
                  <img src="persona.png" alt="Icono Perfil" />
                </button>
                
              </div>
            
              </div>
              <div className="nivel1-card">
              <div className="nivel1-card-header">
              <span>Ejercicio de Programación</span>
            </div>
            <div className="nivel1-card-body">
              <p>Imprima el resultado de 56 multiplicado por 3</p>
            </div>
              <div className="nivel1-card-body">
              <div className="code-box">
                <div className="code-header">ENTRADA</div>
                <div className="code-content">
                  <pre>
                    print ( 
                    <input
                      type="number"
                      value={num1}
                      onChange={(e) => setNum1(e.target.value)}
                      className="code-input-inline"
                      placeholder=""
                    />
                    {' '}
                    *{' '}
                    <input
                      type="number"
                      value={num2}
                      onChange={(e) => setNum2(e.target.value)}
                      className="code-input-inline"
                      placeholder=""
                    />
                    )
                  </pre>
                </div>
              </div>
              
              <div className="code-box">
                <div className="code-header">SALIDA</div>
                <input
                  type="number"
                  value={num1 * num2}
                  className="code-input"
                  readOnly
                />
              </div>
              <div className="nivel1-card-button-container">
                <button className="nivel1-card-button" onClick={checkAnswer}>
                  Verificar
                </button>
                {showNext && (
                  <button
                    className="nivel1-card-button"
                    onClick={() => navigate('/enunciado4')} // Aquí puedes ajustar el número de vista siguiente
                  >
                    Siguiente
                  </button>
                )}
              </div>

              {result && (
                <div className={`result ${result}`}>
                  {result === 'correct' ? 'Correcto' : 'Inténtalo de nuevo'}
                </div>
              )}
            </div>
          </div>
          </div>
</div>
</div>
                  
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>¡Hola, soy pingui jessica!</h2>
            <p>Aquí podrás encontrar todas las ayudas que necesites para completar los ejercicios. ¡No dudes en consultarlo cuando lo necesites!</p>
            
            <div className="nivel1-card-header">
              <p>Seleccione una Ayuda:</p>
            </div>
            
            {/* Contenedor de los iconos en forma vertical */}
            <div className="modal-icons">
              <button className="modal-icon-button" onClick={() => alert('Ayuda 1: Idea')}>
                <img src="idea.gif" alt="Icono 1" className="modal-icon" />
              </button>
              
              <button className="modal-icon-button" onClick={() => alert('Ayuda 2: Apoyo')}>
                <img src="apoyo.gif" alt="Icono 2" className="modal-icon" />
              </button>

              <button className="modal-icon-button" onClick={() => alert('Ayuda 3: Cuaderno')}>
                <img src="cuaderno.gif" alt="Icono 3" className="modal-icon" />
              </button>
            </div>

            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Tres;
