import React, { useState } from 'react';
import './Login.css';

const Login = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para validar el login
    toggleView('dashboard'); // Redirigir al dashboard después de un login exitoso
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Logo" className="login-logo" />
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
      <button className="toggle-button" onClick={() => toggleView('register')}>
        REGISTRARME
      </button>
      <div className="social-login">
        <button>Facebook</button>
        <button>Google</button>
      </div>
      <a href="#" onClick={() => toggleView('reset')}>
        RESTABLECER CONTRASEÑA
      </a>
      <div className="terms">
        Al registrarte en XXX, aceptas nuestros <a href="#">Términos y Política de privacidad.</a>
      </div>
    </div>
  );
};

export default Login;
