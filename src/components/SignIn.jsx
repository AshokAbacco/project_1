import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate, Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setMessage('✅ Login successful!');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        const err = await res.text();
        setMessage(`❌ ${err}`);
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Server error');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container signup">
        <div className="form-container sign-in">
          <div className="form-panel left-panel">
            <div className="content">
              <h2>Welcome</h2>
              <p>Enter your personal details to use all of site features</p>
              <button className="btn" onClick={() => navigate('/signup')}>SIGN UP</button>
            </div>
          </div>

          <div className="form-panel right-panel">
            <form className="form" onSubmit={handleLogin}>
              <h2>Login Here</h2>
              <div className="social-icons1">
                <button className="icon1" type="button"><i className="bi bi-google"></i></button>
                <button className="icon1" type="button"><i className="bi bi-facebook"></i></button>
                <button className="icon1" type="button"><i className="bi bi-linkedin"></i></button>
              </div>
              <span>or use your email to login</span>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn nav-link">LOGIN</button>

              {message && <p style={{ marginTop: '10px', color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
