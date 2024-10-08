import React, { useState } from 'react';
import './Loginsignup.css';
import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import sign_icon from '../../Assets/wired2.gif'


const Loginsignup = () => {
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/signup',formData)
    .then((res) => {
      console.log('Response:', res);
      alert('Signup successful!');
      navigate('/login');
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Error: ' + (err.response?.data?.error || 'Something went wrong!'));
    });
    console.log('Form Data:', formData);
    
  };

  const handleLoginRedirect = () => {
    
    console.log('Redirecting to login page...');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">
        <img src={sign_icon}
    alt="My App Logo" 
    style={{ width:'70px', height: '70px',color:'red',marginTop:'-10px',marginRight:'10px'}}/>Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="email" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">
            Create Account
          </button>
        </div>
      </form>

      <div className="login-redirect">
        <p>Already have an account?</p>
        <Link to='/login' className="login-button" onClick={handleLoginRedirect}>
          Login
        </Link>
      </div>


    </div>
  );
};

export default Loginsignup;
