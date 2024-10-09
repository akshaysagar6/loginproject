// src/Login.js
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"; 
import pass_icon from '../../Assets/password.gif'
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData={
      email,
      password
    }
  axios.post('http://localhost:8081/login',formData)
    .then((res) => {
      console.log('Response:', res);
      alert('Login successful!');
      navigate('/home');
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Error: ' + (err.response?.data?.error || 'Something went wrong!'));
    });
  };

  return (
    
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>
        <img 
    src={pass_icon}
    alt="My App Logo" 
    style={{ width:'70px', height: '70px',color:'red',marginTop:'-10px',marginRight:'10px'}} // Adjust height as needed
/>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to={'/signup'} type="button" className="signup-button">
          Signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
