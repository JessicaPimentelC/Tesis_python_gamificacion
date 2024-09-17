import React, { useState } from 'react';
import '../styles/Login.css';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/Register.css';
import Loginsesion from './Loginsesion';
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard'); // Redirigir al dashboard después de un login exitoso
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>¡Bienvenido a PythonLearner!</h1>
        <p className="login-description">
        "𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙚 𝙚𝙡 𝙥𝙤𝙙𝙚𝙧 𝙙𝙚 𝙡𝙖 𝙥𝙧𝙤𝙜𝙧𝙖𝙢𝙖𝙘𝙞ó𝙣 𝙚𝙣 𝙋𝙮𝙩𝙝𝙤𝙣 𝙮 𝙩𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢𝙖 𝙩𝙪𝙨 𝙞𝙙𝙚𝙖𝙨 𝙚𝙣 𝙧𝙚𝙖𝙡𝙞𝙙𝙖𝙙."        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">LOGIN</h2>
          <div className="form-group">
            <input
              type="email"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <div className="social-login">
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Loginsesion />
          </GoogleOAuthProvider>
        </div>
        <div className="login-footer">
          <a href="#" onClick={() => navigate('/register')}>Create Account</a>
          <a href="#" onClick={() => navigate('reset')}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
