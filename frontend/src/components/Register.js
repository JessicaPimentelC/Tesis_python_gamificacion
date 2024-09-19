import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/Register.css';
import Loginsesion from './Loginsesion'; 

const Register = ({ toggleView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
  
    if (password.length <= 4) {
      alert('La contraseña debe tener al menos 4 caracteres.');
      return;
    }
  
    const userData = { name, email, password };
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Success:', data);
      toggleView('dashboard');
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al registrar. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src="tesis.png" alt="Logo" className="register-logo" />
        <h2 className="register-title">Completa los siguientes espacios</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register-button">REGISTRARME</button>
        </form>
        <div className="social-register">
          
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Loginsesion />
          </GoogleOAuthProvider>
        </div>
        <button onClick={() => toggleView('login')} className="toggle-button">Iniciar Sesión</button>
        <p className="terms">
          Al registrarte en XXX, aceptas nuestros <a href="">Términos y Política de privacidad</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
