import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === 'password') {
      localStorage.setItem('isLoggedIn', 'true'); // Save login state
      setAlert({ type: 'success', message: '✅ Login successful! 🌄' });

      setTimeout(() => {
        setAlert(null);
        navigate('/bucketlist');  // Redirect after success
      }, 1500);
    } else {
      setAlert({ type: 'error', message: '❌ Invalid credentials. Try again!' });
      setTimeout(() => setAlert(null), 3500);
    }
  };

  return (
    <div className="login-container">
      <div className="background-image" />
      <div className="light-effect" />
      <div className="light-effect light-effect-2" />

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
    </div>
  );
};

export default Login;
