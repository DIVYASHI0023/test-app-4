// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');


  const handleSignUp = async (e) => {
    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log('User created successfully');
        setUsername(e.target.value)
      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Simplileap</h2>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Jon Doe" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Vitae ut tempore..." value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      <p>3k+ agents have joined us, now it’s your turn!</p>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
      <p>or</p>
      <button className="google-signup">Sign up with Google</button>
    </div>
  );
};

export default SignUp;
