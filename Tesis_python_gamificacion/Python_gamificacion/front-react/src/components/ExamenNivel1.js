import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Examennivel1.css';

function Examennivel1() {
    const [answers, setAnswers] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [score, setScore] = useState(0);
    const currentTime = new Date().toLocaleString();
    const navigate = useNavigate();

    // Nuevo estado para la pregunta de arrastrar y soltar
    const [dragWords, setDragWords] = useState(['**', '^', '^^', '^']);
    const [droppedWord, setDroppedWord] = useState('');

    const handleDragStart = (e, word) => {
        e.dataTransfer.setData('text', word);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const word = e.dataTransfer.getData('text');
        setDroppedWord(word);
        setDragWords(dragWords.filter(w => w !== word));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
        ...answers,
        [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Respuestas correctas
        const correctAnswers = {
        question1: '**',
        question2: 'B',
        question3: 'A',
        question4: 'C',
        question5: 'D',
        question6: 'B',
        question7: 'A',
        question8: 'A',
        question9: 'A',
        question10: 'B',
        question11: 'C',
        question12: 'A',
        };

        let correct = 0;
        let incorrect = 0;

        if (droppedWord === correctAnswers.question1) {
            correct += 1;
        } else {
            incorrect += 1;
        }
        for (let key in correctAnswers) {
            if (key !== 'question1') {
                if (answers[key] === correctAnswers[key]) {
                    correct += 1;
                } else {
                    incorrect += 1;
                }
            }
        }

        setCorrectCount(correct);
        setIncorrectCount(incorrect);
        setShowModal(true);
        };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/dashboard'); 
    };

    const currentDateTime = new Date().toLocaleString();

    return (
        <div className="exam-container">
            <h1>𝑬𝒙𝒂𝒎𝒆𝒏 𝑵𝒊𝒗𝒆𝒍 1</h1>
            <form className="exam-form" onSubmit={handleSubmit}>
                {/* Pregunta 1 - Arrastrar y soltar */}
                <div className="form-group drag-drop-question">
                <label>1. ¿Cuál es el operador de potencia en Python?</label>
                <div className="drag-words">
                    {dragWords.map((word, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, word)}
                        className="drag-word"
                    >
                        {word}
                    </div>
                    ))}
                </div>
                <div 
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    {droppedWord || 'Arrastra aquí'}
                </div>
                </div>
        
                {/* Ejercicio 2 */}
                <div className="form-group">
                <label htmlFor="question2">2. ¿Cuál es el símbolo de comentarios en Python?</label>
                <select
                    id="question2"
                    name="question2"
                    value={answers.question2 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) //</option>
                    <option value="B">B) #</option>
                    <option value="C">C) &lt;!--</option>
                    <option value="D">D) %</option>
                </select>
                </div>
        
                {/* Ejercicio 3 */}
                <div className="form-group">
                <label htmlFor="question3">3. ¿Cuál es la función para imprimir en Python?</label>
                <select
                    id="question3"
                    name="question3"
                    value={answers.question3 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) print()</option>
                    <option value="B">B) echo()</option>
                    <option value="C">C) console.log()</option>
                    <option value="D">D) output()</option>
                </select>
                </div>
        
                {/* Ejercicio 4 */}
                <div className="form-group">
                <label htmlFor="question4">4. ¿Cuál es el resultado de 5 // 2 en Python?</label>
                <select
                    id="question4"
                    name="question4"
                    value={answers.question4 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) 2</option>
                    <option value="B">B) 2.5</option>
                    <option value="C">C) 3</option>
                    <option value="D">D) 0</option>
                </select>
                </div>
        
                {/* Ejercicio 5 */}
                <div className="form-group">
                <label htmlFor="question5">5. ¿Qué tipo de dato representa una cadena de texto en Python?</label>
                <select
                    id="question5"
                    name="question5"
                    value={answers.question5 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) int</option>
                    <option value="B">B) float</option>
                    <option value="C">C) str</option>
                    <option value="D">D) bool</option>
                </select>
                </div>
        
                {/* Ejercicio 6 */}
                <div className="form-group">
                <label htmlFor="question6">6. ¿Cómo se crea una lista en Python?</label>
                <select
                    id="question6"
                    name="question6"
                    value={answers.question6 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) []</option>
                    <option value="B">B) {}</option>
                    <option value="C">C) ()</option>
                    <option value="D">D) ||</option>
                </select>
                </div>
        
                {/* Ejercicio 7 */}
                <div className="form-group">
                <label htmlFor="question7">7. ¿Cómo se define una función en Python?</label>
                <select
                    id="question7"
                    name="question7"
                    value={answers.question7 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) def function_name():</option>
                    <option value="B">B) function_name() = def:</option>
                    <option value="C">C) func function_name:</option>
                    <option value="D">D) define function_name:</option>
                </select>
                </div>
        
                {/* Ejercicio 8 */}
                <div className="form-group">
                <label htmlFor="question8">8. ¿Cuál es el operador de igualdad en Python?</label>
                <select
                    id="question8"
                    name="question8"
                    value={answers.question8 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) ==</option>
                    <option value="B">B) =</option>
                    <option value="C">C) ===</option>
                    <option value="D">D) !=</option>
                </select>
                </div>
        
                {/* Ejercicio 9 */}
                <div className="form-group">
                <label htmlFor="question9">9. ¿Cómo se agrega un elemento a una lista?</label>
                <select
                    id="question9"
                    name="question9"
                    value={answers.question9 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) list.append(element)</option>
                    <option value="B">B) list.add(element)</option>
                    <option value="C">C) list.insert(element)</option>
                    <option value="D">D) list.push(element)</option>
                </select>
                </div>
        
                {/* Ejercicio 10 */}
                <div className="form-group">
                <label htmlFor="question10">10. ¿Cómo se convierte un string en un número entero?</label>
                <select
                    id="question10"
                    name="question10"
                    value={answers.question10 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) int(string)</option>
                    <option value="B">B) float(string)</option>
                    <option value="C">C) str(string)</option>
                    <option value="D">D) number(string)</option>
                </select>
                </div>
        
                {/* Ejercicio 11 */}
                <div className="form-group">
                <label htmlFor="question11">11. ¿Cuál es el resultado de 10 % 3?</label>
                <select
                    id="question11"
                    name="question11"
                    value={answers.question11 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) 1</option>
                    <option value="B">B) 2</option>
                    <option value="C">C) 3</option>
                    <option value="D">D) 0</option>
                </select>
                </div>
        
                {/* Ejercicio 12 */}
                <div className="form-group">
                <label htmlFor="question12">12. ¿Cómo redondearías el número 4.5678 a dos decimales en Python?</label>
                <select
                    id="question12"
                    name="question12"
                    value={answers.question12 || ''}
                    onChange={handleChange}
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="A">A) round(4.5678, 2)</option>
                    <option value="B">B) math.round(4.5678, 2)</option>
                    <option value="C">C) format(4.5678, ".2f")</option>
                    <option value="D">D) int(4.5678)</option>
                </select>
                </div>
        
                <button type="submit" className="submit-button">Enviar Examen</button>
            </form>
        
            <div className="info-box">
                <h3>Información del Usuario</h3>
                <div className="info-item">
                <img src="jugador.png" alt="Icono Nombre" className="info-icon" />
                <p><strong>Nombre:</strong> Eduardo Jose Daza</p>
                </div>
                <div className="info-item">
                <img src="puntaje.png" alt="Icono Puntaje" className="info-icon" />
                <p><strong>Puntaje:</strong> {score}</p>
                </div>
                <div className="info-item">
                <img src="insignia.png" alt="Icono Insignias" className="info-icon" />
                <p><strong>Insignias:</strong> 0</p>
                </div>
                <div className="info-item">
                <img src="calendario.png" alt="Icono Hora y Fecha" className="info-icon" />
                <p><strong>Hora y Fecha:</strong> {currentTime}</p>
                </div>
            </div>
        
            {showModal && (
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h2>Examen Enviado Correctamente</h2>
                    <p><strong>Nombre:</strong> Eduardo Jose Daza Palencia</p>
                    <p><strong>Fecha y Hora:</strong> {new Date().toLocaleString()}</p>
                    <p><strong>Calificación:</strong> {correctCount}/{correctCount + incorrectCount}</p>
                    <div className="result-summary">
                    <div className="result-item">
                        <img src="si.png" alt="Icono de respuesta correcta" />
                        <span>Respuestas Buenas: {correctCount}</span>
                    </div>
                    <div className="result-item">
                        <img src="borrar.png" alt="Icono de respuesta incorrecta" />
                        <span>Respuestas Malas: {incorrectCount}</span>
                    </div>
                    </div>
                    <img src="2dv.gif" alt="GIF de resultado" className="result-gif" />
                </div>
                </div>
            )}
        
        </div>
    );
}

export default Examennivel1;