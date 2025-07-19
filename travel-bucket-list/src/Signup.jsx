import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setAlert({ type: 'error', message: '❌ Passwords do not match!' });
    } else {
      setAlert({ type: 'success', message: '✅ Signup successful!' });

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }

    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <div className="signup-container">
      {/* Neon Snackbar Alert */}
      {alert && (
        <div className={`alert ${alert.type}`}>
          <i>{alert.type === 'success' ? '✅' : '❌'}</i>
          {alert.message}
        </div>
      )}

      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="Enter your username"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirm your password"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
