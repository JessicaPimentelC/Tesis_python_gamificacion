import React, { useState } from 'react';
import '../styles/Login.css';
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
///import Loginsesion from './Loginsesion'; 
import { useNavigate } from 'react-router-dom';

const Login = ({ toggleView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para la redirección

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:8000/myapp/login/",
        { email, password }
      );

      alert(response.data.message);
      navigate('/dashboard'); 
    }catch (error) {
        console.error(error);
        if (error.response && error.response.data) {
          alert(error.response.data.error || "Credenciales incorrectas");
        } else {
          alert("Credenciales incorrectas");
        }
      }
  };
  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/myapp/accounts/google/login/token/",
        { token: response.credential }
      );

      if (res.data.message) {
        console.error('Error:', res.data.message);
        alert(`ERROR: ${res.data.message}`);
      } 
      else {
      console.log('Inicio de sesión exitoso:', res.data);
      navigate('/dashboard')
      }}

      catch (error) {
      console.error(error);
      alert("Error al iniciar sesión con Google.");
    }
  };
  const handleGoogleLoginFailure = (error) => {
    console.error(error);
    alert("Error al autenticar con Google.");
  };

  return (
    <div className="login-container">
      <img src="/tesis.png" alt="Logo" className="login-logo" />
      <h2>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
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
      <br></br>
      <GoogleOAuthProvider clientId="567858506235-sd9fvbkheo3rnggdfpmnfjp63t6rgej3.apps.googleusercontent.com">
        <main>
          <div>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
            />
          </div>
        </main>
      </GoogleOAuthProvider>
      <button type="button" className="toggle-button" onClick={() => navigate('/register') }>
        REGISTRARME
      </button>
    </div>
  );
};

export default Login;
