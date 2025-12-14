import React, { useState } from 'react';
import LandingPageImg from '../img/LandingPageImg.jpg';
import './HeroPage.css';
import logo1 from '../img/logo1.jpg';
import { Link, useNavigate } from 'react-router-dom';

const HeroPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
        navigate("/home");   
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className='mainPage'>
      <div className='box1'>
        <img src={LandingPageImg} alt='' width='65%' />
      </div>

      <div className='box2'>
        <div>
          <img src={logo1} width='70%' className='img' alt="logo" />
          <br />

          <input
            type='text'
            placeholder='Phone number, username, or email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button onClick={handleLogin}>Log in</button>

          <hr />

          Don't have an account? <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

