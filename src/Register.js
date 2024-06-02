import React, { useState } from 'react';
import './Register.css';

const Register = ({ toggleView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Validación básica
    if (!name || !email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Simulación de registro exitoso
    // Aquí deberías añadir la lógica para registrar al usuario (puede ser una llamada a una API)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirigir al dashboard después de un registro exitoso
    toggleView('dashboard');
  };

  return (
    <div className="register-container">
      <img src="/logo.png" alt="Logo" className="register-logo" />
      <h2>Completa los siguientes espacios</h2>
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
        <button type="submit">REGISTRARME</button>
      </form>
      <div className="social-register">
        <button className="facebook-button">facebook</button>
        <button className="google-button">google</button>
      </div>
      <button onClick={() => toggleView('login')} className="toggle-button">Iniciar Sesión</button>
      <p className="terms">
        Al registrarte en XXX, aceptas nuestros <a href="">Términos y Política de privacidad</a>.
      </p>
    </div>
  );
};

export default Register;


