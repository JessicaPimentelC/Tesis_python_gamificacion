import React, { useState } from 'react';
import '../styles/Login.css';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/Register.css';
import Loginsesion from './Loginsesion';

const Login = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    toggleView('dashboard'); // Redirigir al dashboard después de un login exitoso
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
      <button type='submit' className="toggle-button" onClick={() => toggleView('register')}>
        REGISTRARME
      </button>
      <div className="social-login">

        <FacebookLogin
          appId="1799576823896770"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook} />,


        <GoogleOAuthProvider clientId="567858506235-sd9fvbkheo3rnggdfpmnfjp63t6rgej3.apps.googleusercontent.com">
          <main>
            <Loginsesion />
          </main>
        </GoogleOAuthProvider>
      </div>
      <a className="toggle-button" href="#" onClick={() => toggleView('reset')}>
        RESTABLECER CONTRASEÑA
      </a>
      <div className="terms">
        Al registrarte en XXX, aceptas nuestros <a href="#">Términos y Política de privacidad.</a>
      </div>
    </div>
  );
};

export default Login;
