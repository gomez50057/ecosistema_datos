// src/Login.js
import React, { useState } from 'react';
import './styles.css';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedPassword = 'aG9sYQ=='; // Contraseña codificada en base64
    const decodedPassword = atob(encodedPassword);
    console.log(`Decodificado: ${decodedPassword}, Ingresado: ${password}`); // Añadido para depuración
    if (password.trim() === decodedPassword) {
      onLogin();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Ingrese la contraseña</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Entrar</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
