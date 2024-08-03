import React, { useState } from 'react';
import '../styles/Login.css';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        toggleView('dashboard'); // Redirigir al dashboard después de un login exitoso
      } else {
        console.log('Login failed');
        // Manejar el error de inicio de sesión
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <img src="/tesis.png" alt="Logo" className="login-logo" />
      <h2>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Usuario o Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">INGRESAR</button>
      </form>
      <button type="button" className="toggle-button" onClick={() => toggleView('register')}>
        REGISTRARME
      </button>
    </div>
  );
};

export default Login;
