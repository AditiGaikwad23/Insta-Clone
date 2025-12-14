import React, { useState } from 'react';
import logo1 from '../img/logo1.jpg';
import './SignUp.css';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          fullName,
          username,
          password
        })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Signup successful");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className='signup'>
      <div className='form-container'>
        <img src={logo1} className='signUpLogo' alt="logo" />

        <p className='loginPara'>
          Sign up to see photos and videos <br /> from your friends
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className='loginPara'>
          People who use our services may have uploaded <br />
          your contact information to Instagram
        </p>

        <button onClick={handleSignup}>Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
