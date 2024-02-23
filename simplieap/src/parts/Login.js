// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = async () => {
    useNavigate('/dashborad')
  };

  return (
    <div className="login-container">
      <h2>Simplileap</h2>
      <h3>Login</h3>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Vitae ut tempore..." value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="forgot-password">Forgot Password</p>
      </div>
      <button onClick={HandleLogin}>Login</button>
      <p>Vitae ut tempore. Molestiae blanditiis quasi voluptas dolor ullam quasi voluptatem odio.</p>
      <p>Don't have an account yet? <Link to="/login">Sign in</Link></p>
      <p>3k+ agents have joined us, now it’s your turn!</p>
      <p>or</p>
      <button className="google-login">Login with Google</button>
    </div>
  );
};

export default Login;
